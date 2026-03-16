import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import "../components/ContactStyles.css";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <HeroImg2 heading="CONTACT" />

      <div className="contact-container">

        <h2>Contact Me</h2>

        <p>
          If you would like to contact me through this page, just fill out your information and submit this contact form.
          If you prefer a different alternative, connect with me on LinkedIn and GitHub.
        </p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/joshuajosephwilliams1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/jwilliams140"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>


        <form className="contact-form">

          <input
            type="text"
            placeholder="Name"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
          />

          <textarea
            placeholder="Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;
