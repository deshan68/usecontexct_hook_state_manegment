import React, { useState, createContext, useContext } from "react";
import { AppContext } from "./App";

export default function ChangeProfileCompo() {
  const { setName } = useContext(AppContext);
  const [nameChange, setNameChange] = useState();
  return (
    <div>
      <input type="text" onChange={(e) => setNameChange(e.target.value)} />
      <button onClick={() => setName(nameChange)}>Change Name</button>
    </div>
  );
}
