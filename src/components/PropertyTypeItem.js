import "../assets/css/Cards.css";

import React from "react";
import { Link } from "react-router-dom";

const PropertyTypeItem = (props) => {
  return (
    <div className="card">
      <div className="content">
        <div className="img-box">
          <Link to={`/propertyType/${props.title}`}>
            <img src={props.img} alt="" />
          </Link>
        </div>
        <div className="content-box">
          <h4>{props.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypeItem;
