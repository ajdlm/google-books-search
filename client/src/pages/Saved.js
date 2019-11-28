import React from "react";
import Carousel from "../components/Carousel";
import BootstrapContainer from "../components/BootstrapContainer";
import BookList from "../components/BookList";

const Saved = () => {
  return (
    <div>
      <Carousel />

      <BootstrapContainer>
        <BookList />
      </BootstrapContainer>
    </div>
  );
};

export default Saved;
