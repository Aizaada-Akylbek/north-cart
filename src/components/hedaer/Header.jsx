import React from "react";
import { NavLink } from "react-router-dom";
import menuImg from '../../img/icons/menu.png'
import shopImg from '../../img/icons/shop.png'
import userImg from '../../img/icons/user.png'
import './Header.scss'

const Header = () => {
  return <div className="header">
    <h2 className="logo">NorthStar</h2>
    <div className="text">
      <NavLink to={'/'}><p>HOME</p></NavLink>
      <NavLink to={'/about'}><p>ABOUT</p></NavLink>
      <NavLink to={'/contact'}><p>CONTACT US</p></NavLink>
    </div>
    <div className="icons">
      <img src={userImg} alt="" />
      <NavLink to={'/cart'}><img src={shopImg} alt="" /></NavLink>
      <img src={menuImg} alt="" />
    </div>
  </div>;
};

export default Header;
