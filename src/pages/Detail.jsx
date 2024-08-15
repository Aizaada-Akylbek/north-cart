import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToCart } from "../redux/slice/cartSlice";
import './Detail.scss'

const Detail = () => {
  const dis = useDispatch()
  const [productDeteil, setProductDeteil] = useState([])
  const params = useParams()
  console.log(params.id);
  async function getDeteilProduct(id) {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProductDeteil(data)
  }

  useEffect(() => {
    getDeteilProduct(params.id)
  }, [])

  if (productDeteil === []) {
    return <h1>Louding...</h1>
  }
  console.log(productDeteil);

  return (
    <div className="deteil">
        <div key={productDeteil.id} className="info">
          <img src={productDeteil.image} alt="" />
          <div className="text">
            <h2>{productDeteil.title}</h2>
            <h4>${productDeteil.price}</h4>
            <p>{productDeteil.description}</p>
            <button onClick={()=>dis(AddToCart(productDeteil))}>ADD TO CART</button>
            <h6>Category: <span>{productDeteil.category}</span> </h6>
          </div>
        </div>
    </div>);
};

export default Detail;
