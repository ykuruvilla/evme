import React from "react";
import "./Header.scss";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <a href="/">
          <img className="header__logo" src={logo} alt="logo" />
        </a>
      </div>
      <div className="header__navigation-container">
        <span className="header__navigation-list-item">about us</span>
        <span className="header__navigation-list-item header__navigation-list-item--center">
          profile
        </span>
        <span className="header__navigation-list-item">compare</span>
      </div>
    </header>
  );
};

export default Header;
