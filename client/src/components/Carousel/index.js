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
            <img className="carouselImage d-block" src="bookshelf-1.jpg" alt="first-slide" />

            <div className="carousel-caption">
              <h1 className="mb-5">Google Books Search</h1>


              <h4 className="my-5 pb-3">Search for and save books you're interested in.</h4>
            </div>
          </div>

          <div className="carousel-item">
            <img className="carouselImage d-block" src="bookshelf-1.jpg" alt="second-slide" />
          </div>

          <div className="carousel-item">
            <img className="carouselImage d-block" src="bookshelf-1.jpg" alt="final-slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
