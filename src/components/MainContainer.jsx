import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import bd1 from "../assets/FqFM_HhXgAINKYa.jpg";
import bd2 from "../assets/FrsWjsjWYAIpAiP.jpg";
import bd3 from "../assets/FtAWmQHXoAEQfO6.jpg";
import bd4 from "../assets/FURLD3eWUAsYM5y.jpg";
import bd5 from "../assets/FVcrJXCXEAURJml.jpg";
import bd6 from "../assets/FbrZAXgXkAEAKd6.jpg";

import bd7 from "../assets/FKGyIEhX0AE6SVq.jpg";
import bd8 from "../assets/FKxlQD5XsAYdpxx.jpg";
import bd9 from "../assets/FLLgz1lXMAUiEPj.jpg";
import bd10 from "../assets/FLZIYFhXoAIk0nR.jpg";
import bd11 from "../assets/FMEEAJvXEAALqsy.jpg";
import bd12 from "../assets/FMtYW8hXMAgjZW_.jpg";

import bd13 from "../assets/FNPoQwMWQAE6xSI.jpg";
import bd14 from "../assets/FNrI2FCXsAk5tJb.jpg";
import bd15 from "../assets/FOEh3ZOWQAAdQwl.jpg";
import bd16 from "../assets/FOUQ5F0WQAQOu2L.jpg";
import bd17 from "../assets/FJ8awoJWYAAblME.jpg";
import bd18 from "../assets/FJyeNtMXEAAkEf_.jpg";

export default function MainContainer() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(false);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="mainContainer">
      <img
        className="bdImg"
        src={bd1}
        alt=""
        onClick={() => handleImageClick(0)}></img>
      <img
        className="bdImg"
        src={bd2}
        alt=""
        onClick={() => handleImageClick(1)}></img>
      <img
        className="bdImg"
        src={bd3}
        alt=""
        onClick={() => handleImageClick(2)}></img>
      <img
        className="bdImg"
        src={bd4}
        alt=""
        onClick={() => handleImageClick(3)}></img>
      <img
        className="bdImg"
        src={bd5}
        alt=""
        onClick={() => handleImageClick(4)}></img>
      <img
        className="bdImg"
        src={bd6}
        alt=""
        onClick={() => handleImageClick(5)}></img>

      <img
        className="bdImg"
        src={bd7}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd8}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd9}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd10}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd11}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd12}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd13}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd14}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd15}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd16}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd17}
        alt=""
        onClick={() => handleImageClick(5)}></img>
      <img
        className="bdImg"
        src={bd18}
        alt=""
        onClick={() => handleImageClick(5)}></img>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: bd1 },
          { src: bd2 },
          { src: bd3 },
          { src: bd4 },
          { src: bd5 },
          { src: bd6 },
          { src: bd7 },
          { src: bd8 },
          { src: bd9 },
          { src: bd10 },
          { src: bd11 },
          { src: bd12 },
          { src: bd13 },
          { src: bd14 },
          { src: bd15 },
          { src: bd16 },
          { src: bd17 },
          { src: bd18 },
        ]}
      />
    </div>
  );
}
