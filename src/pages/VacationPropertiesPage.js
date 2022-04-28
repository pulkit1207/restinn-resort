import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ListCard from "../components/ListCard";

const PropertiesPage = () => {
  const [allProperties, setAllProperties] = useState([
    {
      id: 0,
      title: "",
      img: null,
      price: 0,
      bestSeller: null,
      description: "",
      type: "",
      location: "",
    },
  ]);

  useEffect(() => {
    fetch("https://rest-inn-resort-app.herokuapp.com/properties")
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
      {allProperties.map((property) => (
        <ListCard
          key = {property.id}
          id = {property.id}
          title={property.title}
          img={property.img}
          price={property.propertyPrice}
          bestseller={property.bestSeller}
          description={property.description}
          type={property.type}
          location={property.location}
        />
      ))}
      <Footer />
    </div>
  );
};

export default PropertiesPage;
