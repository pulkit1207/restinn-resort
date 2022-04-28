import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

import ListCard from "../components/ListCard";

const SearchPage = () => {
  const [searchProperties, setSearchProperties] = useState([
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
    fetch(`https://rest-inn-resort-app.herokuapp.com/properties/search/${params.searchTitle}`)
      .then((response) => response.json())
      .then((json) => {
        setSearchProperties(json);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  });

  return (
    <div>
      <Navbar />
      {searchProperties.map((property) => (
        <ListCard
          key={property.id}
          id={property.id}
          title={property.title}
          img={property.img}
          price={property.price}
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

export default SearchPage;
