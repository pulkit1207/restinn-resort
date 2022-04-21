import "../assets/css/Cards.css";

import React, { useState, useEffect } from "react";
import BestSellerItem from "./BestSellerItem";

const BestSellerList = () => {
  const [bestSellers, setSetBestSellers] = useState([
    {
      id: 0,
      title: "",
      img: null,
      propertyPrice: 0,
      bestseller: false,
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:8085/properties")
      .then((response) => response.json())
      .then((json) => {
        setSetBestSellers(json);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <section id="section-property-list">
      <div className="container">
        <h1>Best Seller</h1>

        <div className="card-container">
          {bestSellers
            .filter((item) => {
              if (item.bestSeller === true) {
                return item;
              } else {
                return null;
              }
            })
            .map((bestSeller) => (
              <BestSellerItem
                key={bestSeller.id}
                id={bestSeller.id}
                title={bestSeller.title}
                img={bestSeller.img}
                price={bestSeller.propertyPrice}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerList;
