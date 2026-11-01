import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profileImg from "../assets/Profile.jpg";
import "../components/AboutStyles.css";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-content">
            <p className="about-eyebrow">ABOUT ME</p>

            <h1>
              Building a foundation for a career in
              <span> information technology.</span>
            </h1>

            <p className="about-intro">
              I'm Joshua Williams, a Computer Science student developing
              practical skills in IT support, computer hardware, operating
              systems, and networking.
            </p>
          </div>
        </section>

        <section className="about-story">
          <div className="about-photo-column">
            <div className="about-photo-frame">
              <img src={profileImg} alt="Joshua Williams" />
            </div>

            <div className="about-status-card">
              <span className="about-status-dot"></span>

              <div>
                <p>Currently pursuing</p>
                <strong>CompTIA A+ Certification</strong>
              </div>
            </div>
          </div>

          <div className="about-story-content">
            <p className="section-label">MY PATH</p>

            <h2>From an interest in computers to a future in IT.</h2>

            <p>
              My interest in technology began with learning about computer
              hardware, operating systems, networking, and troubleshooting
              through specialized technical training in high school. Those
              experiences gave me an early opportunity to work through
              practical computer problems and understand how different parts
              of a system work together.
            </p>

            <p>
              I continued developing that foundation through college coursework
              in computer networking (multi-platform) before pursuing my
              bachelor's degree in Computer Science at California State
              University, Bakersfield.
            </p>

            <p>
              As I continue my education, my goal is to build the technical
              knowledge and hands-on experience needed for a career in
              information technology. I'm especially interested in
              troubleshooting, supporting users, maintaining computer systems,
              and continuing to strengthen my understanding of hardware,
              operating systems, and networks.
            </p>

            <div className="about-actions">
              <Link to="/resume" className="about-btn primary">
                View Resume
              </Link>

              <Link to="/contact" className="about-btn secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <section className="about-foundation">
          <div className="about-section-heading">
            <p className="section-label">TECHNICAL FOUNDATION</p>
            <h2>What I'm building experience with</h2>
            <p>
              My education and technical training have given me exposure to
              several areas that support my goal of working in IT.
            </p>
          </div>

          <div className="foundation-grid">
            <article className="foundation-card">
              <span className="card-number">01</span>
              <h3>Operating Systems</h3>
              <p>
                Working with Windows 10/11 and Linux, including file
                management, command-line tools, permissions, and basic system
                configuration.
              </p>
            </article>

            <article className="foundation-card">
              <span className="card-number">02</span>
              <h3>Hardware & Troubleshooting</h3>
              <p>
                Experience with desktop hardware, RAM and storage upgrades,
                peripherals, system maintenance, and basic PC troubleshooting.
              </p>
            </article>

            <article className="foundation-card">
              <span className="card-number">03</span>
              <h3>Networking</h3>
              <p>
                Building knowledge of TCP/IP, IPv4 addressing, LAN
                configuration, and wired and wireless networking fundamentals.
              </p>
            </article>
          </div>
        </section>

        <section className="about-next">
          <p className="section-label">LOOKING AHEAD</p>

          <h2>Still learning. Still building.</h2>

          <p>
            I'm continuing to develop my technical abilities while completing
            my Computer Science degree and preparing for opportunities where I
            can apply what I've learned in a professional IT environment.
          </p>

          <Link to="/contact" className="about-text-link">
            Let's connect <span>→</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;