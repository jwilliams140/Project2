import React from "react";
import { Link } from "react-router-dom";
import "./HomeStyles.css";
import profile from "../assets/Profile.jpg";

const HomeContent = () => {
  return (
    <div className="home-container">

      <img src={profile} alt="Profile" className="profile-img" />

      <h1>Joshua Williams</h1>

      <h2>University Student</h2>

      <p>
        I am a current CSUB student majoring in Computer Science.
        My goal is to obtain a bachelor's degree and pursue the IT Support Field.
      </p>

      <div className="cta-buttons">
        <Link to="/portfolio" className="btn">View Portfolio</Link>
        <Link to="/contact" className="btn btn-light">Contact Me</Link>
      </div>

    </div>
  );
};

export default HomeContent;