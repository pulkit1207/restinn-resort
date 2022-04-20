import "../assets/css/Cards.css";

import React, { useState, useEffect } from "react";
import PropertyTypeItem from "./PropertyTypeItem";

const PropertyTypeList = () => {
  /*
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

  */
  return (
    <section id="section-property-list">
      <div className="container">
        <h1>Property Type</h1>

        <div className="card-container">
          
          <PropertyTypeItem title= "Condominium" img="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <PropertyTypeItem title= "Hotel" img="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <PropertyTypeItem title= "Resort" img="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <PropertyTypeItem title= "Apartment" img="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
           
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeList;
