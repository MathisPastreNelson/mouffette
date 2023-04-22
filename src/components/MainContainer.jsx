import React, { useState, useEffect } from "react";

import { FaArrowDown } from "react-icons/fa";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { useCollapse } from "react-collapsed";

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
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const {
    getCollapseProps: getCollapseProps2,
    getToggleProps: getToggleProps2,
    isExpanded: isExpanded2,
  } = useCollapse();

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  useEffect(() => {
    if (isCollapsed && isExpanded2) {
      fade;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isCollapsed, isExpanded2]);

  return (
    <div className="mainContainer">
      <AnimationOnScroll initiallyVisible="true" animateIn="animate__fadeIn">
        <img
          className="bdImg"
          src={bd1}
          alt=""
          onClick={() => handleImageClick(0)}></img>
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible="true" animateIn="animate__fadeIn">
        <img
          className="bdImg"
          src={bd2}
          alt=""
          onClick={() => handleImageClick(1)}></img>
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible="true" animateIn="animate__fadeIn">
        <img
          className="bdImg"
          src={bd3}
          alt=""
          onClick={() => handleImageClick(2)}></img>
      </AnimationOnScroll>

      <section className="collapseBox" {...getCollapseProps2()}>
        <AnimationOnScroll initiallyVisible="true" animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd4}
            alt=""
            onClick={() => handleImageClick(3)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll initiallyVisible="true" animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd5}
            alt=""
            onClick={() => handleImageClick(4)}></img>
        </AnimationOnScroll>

        <AnimationOnScroll initiallyVisible="true" animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd6}
            alt=""
            onClick={() => handleImageClick(5)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg "
            src={bd7}
            alt=""
            onClick={() => handleImageClick(6)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg "
            src={bd8}
            alt=""
            onClick={() => handleImageClick(7)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd9}
            alt=""
            onClick={() => handleImageClick(8)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd10}
            alt=""
            onClick={() => handleImageClick(9)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd11}
            alt=""
            onClick={() => handleImageClick(10)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd12}
            alt=""
            onClick={() => handleImageClick(11)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd13}
            alt=""
            onClick={() => handleImageClick(12)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd14}
            alt=""
            onClick={() => handleImageClick(13)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd15}
            alt=""
            onClick={() => handleImageClick(14)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd16}
            alt=""
            onClick={() => handleImageClick(15)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd17}
            alt=""
            onClick={() => handleImageClick(16)}></img>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img
            className="bdImg"
            src={bd18}
            alt=""
            onClick={() => handleImageClick(17)}></img>
        </AnimationOnScroll>
      </section>
      {isExpanded2 ? null : (
        <button className="buttonCollapse" {...getToggleProps2()}>
          <p className="textButtons">{isExpanded2 ? null : <FaArrowDown />}</p>
        </button>
      )}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Fullscreen, Zoom]}
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
