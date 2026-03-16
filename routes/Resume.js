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
            Motivated university student with experience in computer troubleshooting, coding, and web design. Has spent the last few years acquiring
            skills through education and demonstrating them through personal and professional projects. Passionate about learning new concepts 
            and moving up to a leadership role in a professional environment.
          </p>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li>Computer Troubleshooting</li>
            <li>Java</li>
            <li>React</li>
            <li>GitHub</li>
            <li>Assembly Language</li>
            <li>Embedded Systems (IoT)</li>
            <li>Python</li>
            <li>MIPS</li>
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
          < br />
          <h2>Computer Networking Student</h2>
          <h2>Antelope Valley College (August 2020 - December 2020)</h2>
          < br />

          <h3>Computer Troubleshooting</h3> 
          <p>
            Simulated common computer troubleshooting problems through hands-on labs in Windows & Linux virtual machines and collaborated 
            with a peer to present a mock network server.
          </p> < br />
          <br/>

          <h2>Computer Science Student</h2>
          <h2>California State University, Bakersfield (Janaury 2021 -)</h2>
          < br />
          <h3>Programming Languages</h3>

          <p>
            Individually developed projects using different programming languages (Java, Assembly Language, C++) and 
            collaborated with other peers to develop projects under a strict deadline. 
          </p> < br />
          < br />

          <h3>React Development</h3>
          <p>
            Developed projects that included creating an introduction app with a peer, implementing a Pokemon search, 
            and creating a portfolio all using react development tools.
          </p>

        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Resume;


