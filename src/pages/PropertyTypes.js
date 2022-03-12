import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListCard from "../components/ListCard";
import { useParams } from "react-router-dom";

const PropertyTypes = () => {
  const [propertyTypes, setPropertyTypes] = useState([
    {
      id: 0,
      title: "",
      img: null,
      price: 0,
      bestseller: null,
      description: "",
      type: "",
      location: "",
    },
  ]);

  const { type } = useParams;

  useEffect(() => {
    fetch(`http://localhost:5000/properties/`)
      .then((response) => response.json())
      .then((json) => {
        setPropertyTypes(json);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, [type]);

  return (
    <div>
      <Navbar />
      {propertyTypes
        .filter((item) => {
          if (item.bestseller === true) {
            return item;
          } else {
            return null;
          }
        })
        .map((property) => (
          <ListCard
            key = {property.id}
            id = {property.id}
            title={property.title}
            img={property.img}
            price={property.price}
            bestseller={property.bestseller}
            description={property.description}
            type={property.type}
            location={property.location}
          />
        ))}
      <Footer />
    </div>
  );
};

export default PropertyTypes;
