import React from "react";
import "./style.css";

const Carousel = props => {
  return (
    <div>
      <div
        className="bookCarousel carousel slide"
        data-ride="carousel"
        data-interval="5000"
      >
        <ol className="carousel-indicators">
          <li
            data-target=".bookCarousel"
            data-slide-to="0"
            className="active"
          ></li>

          <li data-target=".bookCarousel" data-slide-to="1"></li>

          <li data-target=".bookCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img className="carouselImage d-block" src="bookshelf-1.jpg" alt="gravity's-rainbow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
