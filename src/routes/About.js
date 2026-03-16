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

      <HeroImg2 heading="ABOUT" />

      <div className="about-container">

        <img src={profile} alt="Profile" className="about-image" />

        <h1>Joshua Williams</h1>

        <p className="about-description">
            Since high school I have taken the necessary steps to acquire skills through computer science.
            My experience first started with computer troubleshooting during my junior and senior year in high school.
            In college, I first majored in computer networking but I felt the program wasn't set up to help students
            succeed learning computer hardware. I switched to being a computer engineering student and started to 
            learn what I've mostly been doing the last few years. Now as a computer science, I am more confident in
            my ability to showcase my experience through this portfolio.
        </p>

        <p>
          <strong>Years of Experience:</strong> 2+ years deveoping projects using coding and web development tools.
        </p>
        <br />

        <section>
          <h2>Specializations</h2>
          <ul>
            <li>IT Support Specialist</li>
            <li>Software Engineer</li>
            <li>Front-End Developer</li>
            <li>Embedded Software Engineer</li>
          </ul>
        </section>
        <br />

        <section>
          <h2>Skills</h2>
          <ul>
            <li>Computer Troubleshooting</li>
            <li>Java</li>
            <li>React</li>
            <li>GitHub</li>
            <li>Assembly Language</li>
            <li>IoT</li>
            <li>Python</li>
            <li>MIPS</li>
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
