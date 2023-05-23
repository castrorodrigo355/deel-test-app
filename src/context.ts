import { createContext, useContext } from "react";

interface AutoComplete {
  selectedUserId: number | undefined;
  setSelectedUserId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const AutoCompleteContext = createContext<AutoComplete>({
  selectedUserId: undefined,
  setSelectedUserId: () => {},
});

const useAutoCompleteContext = (): AutoComplete =>
  useContext(AutoCompleteContext);

export { AutoCompleteContext, useAutoCompleteContext };
