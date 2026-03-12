import "./HeroImgStyles.css";
import React from "react";
import Placeholder from "../assets/placeholder.jpg";


const HeroImg = () => {
  return ( 
  <div className = "hero">
    <div className = "mask">
        <img className = "placeholder" src = 
        {Placeholder} alt = "Placeholder" />
    </div>
    <div className = "content">
      <p> Placeholder Text </p>
      <h1> Placeholder Text </h1>
      <div> 
      </div>
    </div>
  </div>
  );
};

export default HeroImg

