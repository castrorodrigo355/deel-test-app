import { useState, ChangeEvent } from "react";
import { useAutoCompleteContext } from "../../context";
import { Option } from "../option";
import { User } from "../../types/user.interface";
import { url } from "../../url";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../loading";
import { CleanIcon } from "../cleanIcon";
import "./styles.css";

/*
  * This component has contains the list of elements just to select 
    one of them and then... show  specific data.
  * We are using custom hooks to retrieve data from an external real API.
    User can select elements or use the input search to filter coincidences
    from retrieved list. It has an icon when user needs to clean input search. 
 */

export const AutoComplete = (): JSX.Element => {
  const { setSelectedUserId } = useAutoCompleteContext();
  const { loading, data } = useFetch<User[] | undefined>(url);
  const [userInput, setUserInput] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const filteredOptions =
    data?.filter(({ name }) =>
      name.toLowerCase().includes(userInput.toLowerCase())
    ) ?? [];

  const onMouseEnter = (): void => setShowOptions(true);
  const onMouseLeave = (): void => setShowOptions(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserInput(value);
    if (value === "") setSelectedUserId(undefined);
  };

  const cleanInputSearch = (): void => {
    setUserInput("");
    setSelectedUserId(undefined);
  };

  const optionSelection = async ({ id, name }: User) => {
    setUserInput(name);
    setShowOptions(false);
    setSelectedUserId(id);
  };

  if (loading) return <Loading />;
  if (!data) return <></>;

  return (
    <div className="autocomplete-container" onMouseLeave={onMouseLeave}>
      <input
        placeholder="Search..."
        value={userInput}
        onChange={onChange}
        onMouseEnter={onMouseEnter}
      />
      {userInput !== "" && <CleanIcon onClick={cleanInputSearch} />}
      {showOptions && (
        <ul className="option-list">
          {filteredOptions.map((option) => (
            <Option
              key={option.id}
              name={option.name}
              onClick={() => optionSelection(option)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
