import "../assets/css/Carousel.css";

import React, { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [carouselData, setCarouselData] = useState([
    {
      id: 0,
      img: null,
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/featuredPosts")
      .then((response) => response.json())
      .then((json) => {
        setCarouselData(json);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, []);

  const length = carouselData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <MdArrowBackIos className="left-arrow" onClick={previousSlide} />

      {carouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} className="image" alt="" />
            )}
          </div>
        );
      })}

      <MdArrowForwardIos className="right-arrow" onClick={nextSlide} />
    </section>
  );
};

export default Carousel;
