import logo from "../assets/images/logo.svg";
import { useState } from "react";
import MySwitch from "./MySwitch";
import Dropdown from "./Dropdown";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <img src={logo} alt="logo" />
      <div className="flex items-center dark:bg-dark-primary">
        {/* Dropdown Menu */}
        <Dropdown />
        {/* Theme Toggle */}
        <MySwitch />
      </div>
    </div>
  );
};

export default NavBar;
