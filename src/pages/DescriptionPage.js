import "../assets/css/Description.css";

import React, { useState, useEffect } from "react";
import { FcCurrencyExchange, FcLandscape, FcHome} from "react-icons/fc";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DescriptionPage = () => {
  const [resort, setResort] = useState({
    id: 0,
    title: "",
    image: null,
    price: 0,
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/properties/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setResort(json);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img src={resort.img} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{resort.title}</h2>
              <span>
                <FcCurrencyExchange /> CAD {resort.price} per night
              </span>
              <span>
                <FcLandscape /> {resort.location}
              </span>
              <span>
                <FcHome /> {resort.type}
              </span>
            </div>

            <div className="row">
              <p> <b>Amenities:</b> {resort.amenities} </p>
              <p> <b>House Rules:</b> {resort.rules}</p>
            </div>

            <p> {resort.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DescriptionPage;
