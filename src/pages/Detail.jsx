import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [productDeteil, setProductDeteil] = useState([])
  const params = useParams()
  console.log(params.id);
  async function getDeteilProduct(id) {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProductDeteil([data])
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
      {productDeteil.map((el) => (
        <div key={el.id} className="info">
<img src={el.image} alt="" />
<div className="text">
  <h2>{el.title}</h2>
  <h4>{el.price}</h4>
  <p>{el.description}</p>
  <button>add to cart</button>
  <h6>Category: {el.category}</h6>
</div>
        </div>
      ))}
    </div>);
};

export default Detail;
