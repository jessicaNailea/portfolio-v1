import React from "react";
import "./carousel.scss";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <Carousel>
      <div className="carousel-image">
        <img src={require("../../assests/brazil.jpg")} />
      </div>
      <div className="carousel-image">
        <img src={require("../../assests/fog.jpg")} />
      </div>
      <div className="carousel-image">
        <img src={require("../../assests/forest.jpg")} />
      </div>
      <div className="carousel-image">
        <img src={require("../../assests/mexico.jpg")} />
      </div>
    </Carousel>
  );
};

export { CarouselComponent };
