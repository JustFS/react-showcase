import React from "react";
import { NavLink } from "react-router-dom";

const ButtonsBottom = (props) => {
  return (
    <div className="scroll-bottom">
      <div className="sb-main">
        {props.left && (
          <NavLink to={props.left} className="left">
            <span>&#10092;</span>
          </NavLink>
        )}
        <p className="center">scroll</p>
        {props.right && (
          <NavLink to={props.right} className="right">
            <span>&#10093;</span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ButtonsBottom;
