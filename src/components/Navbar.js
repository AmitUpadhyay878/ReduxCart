import React, { useState } from "react";
import LOGO from "../photo/logo2.png";
import { NavLink } from "react-router-dom";
import { BsFillBasket3Fill } from "react-icons/bs";
import { useSelector } from "react-redux";
// import ProductReducer from "../store/reducers/ProductReducer";
const Navbar = () => {
  const { CartReducer } = useSelector((state) => state);
  // console.log(CartReducer);

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav_container">
            <div className="nav__left ">
              <NavLink to="/">
                <img src={LOGO} alt="" className="rounded-full" />
              </NavLink>
            </div>
            <div className="nav__right">
              <div className="basket">
                <NavLink to="/cart">
                  {" "}
                  <BsFillBasket3Fill className="cart-icon" />
                  {/* <span className="h-8 w-8 rounded-full bg-red-500 flex flex-auto justify-center align-center">2</span> */}
                  <span>{CartReducer.products.length}</span>{" "}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
