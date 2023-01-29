import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"/profile"}>
        <li>Profile</li>
      </NavLink>
      <NavLink to={"/contact"}>
        <li>Contact</li>
      </NavLink>
    </ul>
  );
}
