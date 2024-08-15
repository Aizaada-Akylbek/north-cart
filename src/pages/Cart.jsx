import React from "react";
import { useSelector } from "react-redux";
import Iks from '../img/iks.png'
import './Cart.scss'

const Cart = () => {
  const { cartData } = useSelector(state => state.cart)

  return <div className="cart">
    <div className="hero">
      <h3>Product</h3>
      <h3>Price</h3>
      <h3>Quantity</h3>
      <h3>Total</h3>
    </div>
    <hr />
    <div className="products">
      {cartData.map(el => (
        <div className="product">
          <img src={Iks} alt="" />
          <h4>{el.title}</h4>
          <h4>${el.price}</h4>
          <div className="count">
            <p>{el.count}</p>
          </div>
          <h4>${el.price}</h4>
        </div>
      ))}
    </div>
  </div>;
};

export default Cart;
