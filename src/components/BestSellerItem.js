import "../assets/css/Cards.css";
import { Link } from "react-router-dom";
import { FcCurrencyExchange } from "react-icons/fc";

import React from "react";

const BestSellerItem = (props) => {
  return (
    <div class="card">
      <div class="content">
        <div class="img-box">
          <Link to={`/bestseller/${props.id}`}>
            <img src={props.img} alt="" />
          </Link>
        </div>
        <div class="content-box">
          <h4>{props.title}</h4>
          <p><FcCurrencyExchange />  {props.price} per night</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerItem;
