import "./HomeStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/Profile.jpg";

const HomeContent = () => {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-content">
          <p className="home-eyebrow">HELLO, I'M</p>

          <h1>Joshua Williams</h1>

          <h2>
            Computer Science Student
            <span>Aspiring IT Professional</span>
          </h2>

          <p className="home-description">
            I'm a Computer Science student building hands-on skills in IT
            support, computer hardware, operating systems, and networking as I
            prepare for a career in information technology.
          </p>

          <div className="home-actions">
            <Link to="/resume" className="home-btn primary-btn">
              View Resume
            </Link>

            <Link to="/contact" className="home-btn secondary-btn">
              Contact Me
            </Link>
          </div>

          <div className="home-skills">
            <span>Windows</span>
            <span>Linux</span>
            <span>Hardware</span>
            <span>Networking</span>
          </div>

          <div className="certification-status">
            <span className="status-dot"></span>

            <p>
              CompTIA A+ <span>In Progress</span>
            </p>
          </div>
        </div>

        <div className="home-visual">
          <div className="profile-glow"></div>

          <div className="profile-frame">
            <img
              src={profileImg}
              alt="Joshua Williams"
              className="profile-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;