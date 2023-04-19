import React, { useState } from "react";
import bd1 from "../assets/FqFM_HhXgAINKYa.jpg";
import bd2 from "../assets/FrsWjsjWYAIpAiP.jpg";
import bd3 from "../assets/FtAWmQHXoAEQfO6.jpg";
import bd4 from "../assets/FURLD3eWUAsYM5y.jpg";
import bd5 from "../assets/FVcrJXCXEAURJml.jpg";
import bd6 from "../assets/FbrZAXgXkAEAKd6.jpg";

export default function MainContainer() {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImage((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
  };

  return (
    <div className="mainContainer">
      <button className="buttonSwitch" onClick={handlePrevClick}>
        Précédent
      </button>
      <div className="imageSizeBox">
        {currentImage === 0 && <img className="bdImg" alt="img1" src={bd1} />}
        {currentImage === 1 && <img className="bdImg" alt="img1" src={bd2} />}
        {currentImage === 2 && <img className="bdImg" alt="img1" src={bd3} />}
        {currentImage === 3 && <img className="bdImg" alt="img1" src={bd4} />}
        {currentImage === 4 && <img className="bdImg" alt="img1" src={bd5} />}
        {currentImage === 5 && <img className="bdImg" alt="img1" src={bd6} />}
      </div>
      <button className="buttonSwitch" onClick={handleNextClick}>
        Suivant
      </button>
    </div>
  );
}
