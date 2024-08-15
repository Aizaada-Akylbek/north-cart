import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import menuImg from '../../img/icons/menu.png'
import shopImg from '../../img/icons/shop.png'
import userImg from '../../img/icons/user.png'
import './Header.scss'

const Header = () => {
  const {cartData}= useSelector(state=>state.cart)
  return <div className="header">
    <h2 className="logo">NorthStar</h2>
    <div className="text">
      <NavLink className={'nav-link'} to={'/'}><p>HOME</p></NavLink>
      <NavLink className={'nav-link'} to={'/about'}><p>ABOUT</p></NavLink>
      <NavLink className={'nav-link'} to={'/contact'}><p>CONTACT US</p></NavLink>
    </div>
    <div className="icons">
      <img src={userImg} alt="" />
      <NavLink className={'nav-link'} to={'/cart'}><img className="cartIcon" src={shopImg} alt="" />
      {cartData.length === 0 ? "" : <div className="per">{cartData.length}</div>}
      </NavLink>
      <img src={menuImg} alt="" />
    </div>
  </div>;
};

export default Header;
