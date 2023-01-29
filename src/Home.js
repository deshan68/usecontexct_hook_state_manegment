import React from "react";
import { useContext } from "react";
import { AppContext } from "./App";

export default function Home() {
  const { name } = useContext(AppContext);
  return (
    <div>
      <h1>Name is : {name}</h1>
    </div>
  );
}
