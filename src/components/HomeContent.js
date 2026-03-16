import React from "react";
import { Link } from "react-router-dom";
import "./HomeStyles.css";
import profile from "../assets/Profile.jpg";

const HomeContent = () => {
  return (
    <div className="home-container">

      <img src={profile} alt="Profile" className="profile-img" />

      <h1>Joshua Williams</h1>

      <h2>Student</h2>

      <p>
        Welcome to my portfolio! Use the above links to access my about, resume, and blog pages.
        If you would like to view my portfolio or contact me, click the portfolio or contact button.
      </p>

      <div className="cta-buttons">
        <Link to="/portfolio" className="btn">Portfolio</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>

    </div>
  );
};

export default HomeContent;
