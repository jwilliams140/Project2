import "./HeroImgStyles.css";

import React from "react";
import Placeholder from "../assets/placeholder.jpg";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return ( 
  <div className = "hero">
    <div className = "mask">
        <img className = "into-img" src = 
        {Placeholder} alt = "Placeholder" />
    </div>
    <div className = "content">
      <p> Placeholder Text </p>
      <h1> Placeholder Text </h1>
      <div> 
        <Link to = "/project"
        className = "btn">Projects</
        Link>
        <Link to = "/contact"
        className = "btn btn-light">
          Contact
          </Link>
      </div>
    </div>
  </div>
  );
};

export default HeroImg
