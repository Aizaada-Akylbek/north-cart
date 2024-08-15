import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import imgHero from '../img/Hero-img.png'
import { getProducts } from "../redux/slice/productsSlice";
import icon1 from '../img/icons/home-icon1.png'
import icon2 from '../img/icons/home-icon2.png'
import icon3 from '../img/icons/home-icon3.png'
import icon4 from '../img/icons/home-icon4.png'
import './Home.scss'

const Home = () => {
  const dis = useDispatch()
  useEffect(() => {
    dis(getProducts())
  }, [])
  const { productsData, loading } = useSelector(state => state.products)
  if (loading === true) {
    return <h1>Loading...</h1>
  }

  const newPros = productsData.slice(0, 8)
  const topPros = productsData.slice(8, 12)

  console.log(newPros);

  return <div className="home">
    <div className="hero">
      <img src={imgHero} alt="" />
    </div>
    <div className="new">
      <h2>Discover NEW Arrivals</h2>
      <p>Recently added shirts!</p>
      <div className="carts">
        {newPros.map((el) => (
          <NavLink className={'nav-link'} key={el.id} to={`/deteil/${el.id}`}>
            <div className="cart">
              <img src={el.image} alt="" />
              <h4>{el.title}</h4>
              <p>${el.price}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
    <div className="advantages">
      <div className="adva">
        <img src={icon1} alt="" />
        <div className="text">
          <h5>Free Shipping</h5>
          <p>Enjoy free shipping on all orders above $100</p>
        </div>
      </div>
      <div className="adva">
        <img src={icon2} alt="" />
        <div className="text">
          <h5>SUPPORT 24/7</h5>
          <p>Our support team is there to help you for queries</p>
        </div>
      </div>
      <div className="adva">
        <img src={icon3} alt="" />
        <div className="text">
          <h5>30 DAYS RETURN</h5>
          <p>Simply return it within 30 days for an exchange.</p>
        </div>
      </div>
      <div className="adva">
        <img src={icon4} alt="" />
        <div className="text">
          <h5>100% PAYMENT SECURE</h5>
          <p>Our payments are secured with 256 bit encryption</p>
        </div>
      </div>

    </div>
    <div className="discounts">
      <div className="box1 box">
        <h3>PEACE OF MIND</h3>
        <p>A one-stop platform for all your fashion needs, <br /> hassle-free. Buy with a peace of mind.</p>
        <button>BUY NOW</button>
      </div>
      <div className="box2 box">
        <h3>Buy 2 Get 1 Free</h3>
        <p>End of season sale. Buy any 2 items of your choice <br /> and get 1 free.</p>
        <button>BUY NOW</button>
      </div>
    </div>
    <div className="top new">
      <h2>Top Sellers</h2>
      <p>Browse our top-selling products</p>
      <div className="carts">
        {topPros.map((el) => (
          <NavLink className={'nav-link'} key={el.id} to={`/deteil/${el.id}`}>
            <div className="cart">
              <img src={el.image} alt="" />
              <h4>{el.title}</h4>
              <p>${el.price}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <button>SWOP NOW</button>
    </div>
  </div>;
};

export default Home;
