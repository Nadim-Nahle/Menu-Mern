import React from "react";
import "./Header.css";
import rest from "../../assets/img/restaurant.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <NavLink to="/">
          <img src={rest} alt="" className="logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
