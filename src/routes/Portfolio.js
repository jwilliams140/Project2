import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { projects } from "../data/Projects";
import { Link } from "react-router-dom";
import "./PortfolioStyles.css";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Banner heading="PORTFOLIO"/>

      <div className="portfolio-container">

        {projects.map((project) => (
          <div key={project.slug} className="project-card">

            <img src={project.image} alt={project.title} />

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <h4>Tech Stack</h4>
            <ul>
              {project.tech.map((techItem, index) => (
                <li key={index}>{techItem}</li>
              ))}
            </ul>

            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}

            <br />

            <Link to={`/portfolio/${project.slug}`}>
              View Details
            </Link>

          </div>
        ))}

      </div>

      <Footer /> 
    </div>
  );
};

export default Portfolio;