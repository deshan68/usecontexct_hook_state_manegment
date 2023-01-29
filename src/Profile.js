import React from "react";
import ChangeProfileCompo from "./ChangeProfileCompo";
import { useContext } from "react";
import { AppContext } from "./App";

export default function Profile() {
  const { name } = useContext(AppContext);
  return (
    <div>
      <h1>Name is: {name}</h1>
      <ChangeProfileCompo />
    </div>
  );
}
