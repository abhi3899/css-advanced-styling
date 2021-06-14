import React from "react";
import "../styles/header.scss";
import logo from "../images/logo-white.png";

function Header() {
  return (
    <div className="header">
      <div className="logo-box">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="main-container">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">Is where life happens</span>
         
        </h1>
        <button className="btn btn-white">Discover Our Tours</button>
      </div>
    </div>
  );
}

export default Header;
