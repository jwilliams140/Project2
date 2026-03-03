import "./HeroImgStyles.css";

import React from "react";
import Placeholder from "../assets/placeholder.jpg";


const HeroImg = () => {
  return <div className = "hero">
    <div className = "mask">
        <img className = "into-img" src = 
        {Placeholder} alt = "Placeholder"/>
    </div>
  </div>;
};

export default HeroImg
