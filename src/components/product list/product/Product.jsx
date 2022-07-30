import React from 'react';
import "./product.css";

function Product(props) {
  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle red"></div>
            <div className="p-circle yellow"></div>
            <div className="p-circle green"></div>
        </div>
        <a href={props.link} target="_blank" rel="noreferrer">
            <img src={props.img} alt="" className="p-img" />
        </a>
    </div>
  )
}

export default Product;