import React from "react";
import logo from "../../assets/logos/logo.svg";
import menuLogo from "../../assets/logos/menu.svg";
import closeLogo from "../../assets/logos/close.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <img src={menuLogo} alt="menu" />
    </header>
  );
};

export default Header;
