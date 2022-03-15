import React from "react";
import { NavLink } from "react-router-dom";
import banner from "../photo/banner2.jpg";
const Header = () => {
  return (
    <div className="header">
    <img src={banner} alt="" />
      {/* <h1 align="center">Hello</h1> */}
    </div>
  );
};

export default Header;
