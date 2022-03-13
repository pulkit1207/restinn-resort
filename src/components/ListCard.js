import "../assets/css/PropertyList.css";

import React from "react";
import { Link } from "react-router-dom";

import {  FcLandscape, FcRating, FcHome, FcCurrencyExchange} from "react-icons/fc";

const ListCard = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img src={props.img} alt="" />
        </div>

        <div className="card-content">
          <div className="card-details">
            <div className="icon-text">
              <span className="icon">
                <FcLandscape />
              </span>
              <span className="text">{props.location}</span>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FcHome />
              </span>
              <span className="text">{props.type}</span>
            </div>
            <div className={props.bestseller === true ? "icon-text" : "hidden"}>
              <span className="icon">
                <FcRating />
              </span>
              <span className="text">Best Seller</span>
            </div>
          </div>

          <h2 className="property-title">{props.title}</h2>

          <p><FcCurrencyExchange />CAD {props.price} per night</p>

          <div className="property-cta">
            <Link to={`/property/${props.id}`} className="button">
              View more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
