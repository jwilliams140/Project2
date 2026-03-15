import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import "../components/ResumeStyles.css";

const Resume = () => {
  return (
    <div>
      <Navbar />

      <HeroImg2 heading="RESUME" />

      <div className="resume-container">

        <section>
          <h2>Professional Summary</h2>
          <p>
            Motivated univeristy student with experience in computer troubleshooting, creating programs
            from different programming languages, and building applications through React. Passionate
            about learning new tools and taking on a leadership role when collaborating with others.
          </p>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li>Java</li>
            <li>Assembly Language</li>
            <li>Computer Troubleshooting</li>
            <li>React</li>
            <li>Embedded Systems (IoT)</li>
            <li>Python</li>
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            Coursework towards Associate's Degree < br/>
            Antelope Valley College (Attempted)
          </p>
          <br />

          <p>
            Bachelor of Science in Computer Science <br />
            California State University, Bakersfield (In Progress)
          </p>
          <br />

        </section>
        <section>
          <h2>Experience</h2>
          <h3>Portfolio Website/App</h3> 
          <p>
            Created a portfolio, pokemon search, and introduction app using React with dynamic routing,
            structured project data, and reusable components for application
            development class
          </p> < br />
          <br/>

          <h3>Blog</h3>
          <p>
            Created a blog using React Router with dynamic slug
            routing and posts stored in structured data files.
          </p>

        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Resume;


