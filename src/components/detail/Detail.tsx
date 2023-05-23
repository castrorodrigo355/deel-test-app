import { useAutoCompleteContext } from "../../context";
import { url } from "../../url";
import { User } from "../../types/user.interface";
import { Loading } from "../loading";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";

/*
  * This component shows specific data of a selected user from list.
    We are re-using the custom hook to retrieve data dynamcally.
    If the user selects an element of list, we will be doing an async request.
 */

export const Detail = (): JSX.Element => {
  const { selectedUserId } = useAutoCompleteContext();

  const { loading, data, error } = useFetch<User | undefined>(
    selectedUserId ? `${url}/${selectedUserId}` : undefined
  );

  if (error) return <div>{error}</div>;
  if (loading) return <Loading />;
  if (!selectedUserId || !data) return <></>;

  return (
    <div className="detail-container">
      <h2>Name: {data.name}</h2>
      <h3>Username: {data.username}</h3>
      <strong>Web: {data.website}</strong>
      <h5>Email: {data.email}</h5>
      <p>Phone: {data.phone}</p>
      <p></p>
    </div>
  );
};

export default Detail;
