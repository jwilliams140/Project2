import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import "../components/AboutStyles.css";
import profile from "../assets/Profile.jpg"
import resume from "../assets/resume.pdf";

const About = () => {
  return (
    <div>
      <Navbar />

      <HeroImg2 heading="ABOUT ME" />

      <div className="about-container">

        <img src={profile} alt="Profile" className="about-image" />

        <h1>Joshua Williams</h1>

        <p className="about-description">
            I am a current CSUB student majoring in Computer Science.
            My goal is to obtain a bachelor's degree and pursue the IT Support Field.
        </p>

        <p>
          <strong>Years of Experience:</strong> 2+ years developing projects
          and coursework in computer science coursework through college/univeristy.
        </p>
        <br />

        <section>
          <h2>Specializations</h2>
          <ul>
            <li>IT Support</li>
            <li>Application Developer</li>
            <li>Web Designer</li>
          </ul>
        </section>
        <br />

        <section>
          <h2>Skills Overview</h2>
          <ul>
            <li>Computer Troubleshooting</li>
            <li>Java</li>
            <li>React</li>
            <li>Git / GitHub</li>
            <li>Assembly Language</li>
            <li>IoT</li>
            <li>Python</li>
          </ul>
        </section>
        <br />

        <a
          href={resume}
          download
          className="resume-download"
        >
          Download Resume
        </a>

      </div>

      <Footer />
    </div>
  );
};

export default About;
