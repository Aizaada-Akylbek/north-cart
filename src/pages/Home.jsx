import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import imgHero from '../img/Hero-img.png'
import { getProducts } from "../redux/slice/productsSlice";
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
          <NavLink key={el.id} to={`/deteil/${el.id}`}>
            <div className="cart">
              <img src={el.image} alt="" />
              <h4>{el.title}</h4>
              <p>${el.price}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  </div>;
};

export default Home;
