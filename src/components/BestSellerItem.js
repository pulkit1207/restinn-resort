import "../assets/css/Cards.css";

import { Link } from "react-router-dom";
import { FcCurrencyExchange } from "react-icons/fc";

import React from "react";

const BestSellerItem = (props) => {
  return (
    <div className="card">
      <div className="content">
        <div className="img-box">
          <Link to={`/properties/${props.id}`}>
            <img src={props.img} alt="" />
          </Link>
        </div>
        <div className="content-box">
          <h4>{props.title}</h4>
          <p><FcCurrencyExchange />  {props.price} per night</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerItem;
