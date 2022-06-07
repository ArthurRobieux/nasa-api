import React from "react";

import logo from "../../../assets/nasa.webp";

import "./styles.css";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <div>NASA API</div>
      </div>
    </div>
  );
};
