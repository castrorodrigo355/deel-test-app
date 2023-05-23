import { useState } from "react";
import { Detail } from "./components/detail";
import { AutoCompleteContext } from "./context";
import { AutoComplete } from "./components/autocomplete";
import "./App.css";

/*
  * This is the main component from where we will be sharing props using
    a context api that is a native react feature. 
    SelectedUserId represents the selected user from a list
    of elements retrieved from JSONPLACEHOLDER api.
 */

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | undefined>();

  return (
    <div className="container">
      <h1>Auto-Complete</h1>
      <AutoCompleteContext.Provider
        value={{
          selectedUserId,
          setSelectedUserId,
        }}
      >
        <AutoComplete />
        <Detail />
      </AutoCompleteContext.Provider>
    </div>
  );
}

export default App;
