import React from "react";
import "./Header.css";
import rest from "../../assets/img/restaurant.png";

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img src={rest} alt="" className="logo" />
      </div>
    </div>
  );
};

export default Header;
