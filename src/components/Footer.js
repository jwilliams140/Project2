import "./FooterStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              JW
            </Link>

            <h2>Joshua Williams</h2>

            <p>
              Computer Science student building toward a career in information
              technology.
            </p>
          </div>

          <div className="footer-navigation">
            <h3>Explore</h3>

            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-connect">
            <h3>Connect</h3>

            <p>Interested in connecting? Find me online.</p>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/joshuajosephwilliams1/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/jwilliams140"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Joshua Williams</p>
          <p>Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;