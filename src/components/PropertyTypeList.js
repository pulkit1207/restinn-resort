import "../assets/css/Cards.css";

import React, { useState, useEffect } from "react";
import PropertyTypeItem from "./PropertyTypeItem";

const PropertyTypeList = () => {
  const [properties, setProperties] = useState([
    {
      id: 0,
      title: "",
      img: null,
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/propertyTypes")
      .then((response) => response.json())
      .then((json) => {
        setProperties(json);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <section id="section-property-list">
      <div className="container">
        <h1>Property Type</h1>

        <div className="card-container">
          {properties.map((property) => (
            <PropertyTypeItem title={property.title} img={property.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeList;
