import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListCard from "../components/ListCard";
import { useParams } from "react-router-dom";

const PropertyTypes = () => {
  const [allProperties, setAllProperties] = useState([
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

  let params = useParams();

  useEffect(() => {
    fetch("http://localhost:8085/properties")
      .then((response) => response.json())
      .then((json) => {
        setAllProperties(json);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {allProperties
        .filter((property) => {
          if (property.type === params.title) {
            return property;
          } else {
            return null;
          }
        })
        .map((property) => (
          <ListCard
            key={property.id}
            id={property.id}
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
