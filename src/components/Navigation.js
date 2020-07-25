import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <li>Portfolio
          <ul>
            <NavLink to="/projet-1"><li>Projet 1</li></NavLink>
            <NavLink to="/projet-2"><li>Projet 2</li></NavLink>
            <NavLink to="/projet-3"><li>Projet 3</li></NavLink>
            <NavLink to="/projet-4"><li>Projet 4</li></NavLink>
          </ul>
        </li>

        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
