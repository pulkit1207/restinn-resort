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
      bestseller: null,
      description: "",
      type: "",
      location: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/properties")
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

export default PropertiesPage;
