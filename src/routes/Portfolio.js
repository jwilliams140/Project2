import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import housingResearch from "../assets/housing-research.png";
import smartParking from "../assets/smart-parking.png";
import "./PortfolioStyles.css";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <main className="portfolio-page">
        <section className="portfolio-hero">
          <div className="portfolio-hero-content">
            <p className="portfolio-eyebrow">PORTFOLIO</p>

            <h1>
              Selected work from my
              <span> technical journey.</span>
            </h1>

            <p className="portfolio-intro">
              A selection of recent projects that reflect my experience with
              research, data analysis, artificial intelligence, hardware, and
              collaborative problem solving.
            </p>
          </div>
        </section>

        <section className="projects-section">
          <article className="featured-project">
            <div className="project-image-wrapper research-image-wrapper">
              <img
                src={housingResearch}
                alt="Preview of housing affordability research paper"
                className="project-image research-image"
              />
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span>01</span>
                <span>June 2026</span>
              </div>

              <p className="project-type">Research & Data Analysis</p>

              <h2>Housing Affordability in the United States</h2>

              <p className="project-description">
                Collaborated on a research project examining housing
                affordability in the United States. The project involved
                preparing and analyzing housing data, developing a research
                paper, and presenting our findings through a research poster at
                a sponsored CSUB presentation event.
              </p>

              <div className="project-role">
                <span>Project Role</span>
                <p>Collaborative Researcher</p>
              </div>

              <div className="project-technologies">
                <span>Python</span>
                <span>SQL</span>
                <span>Data Analysis</span>
                <span>AI-Assisted Research</span>
                <span>Research Presentation</span>
              </div>

              <p className="project-more">
                A detailed reflection on this project will be available in the
                Blog.
              </p>
            </div>
          </article>

          <article className="featured-project reverse">
            <div className="project-image-wrapper parking-image-wrapper">
              <img
                src={smartParking}
                alt="Smart parking prototype classifying parking spaces as available, occupied, and uncertain"
                className="project-image parking-image"
              />
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span>02</span>
                <span>July 2026</span>
              </div>

              <p className="project-type">AI & Hardware Prototype</p>

              <h2>AI Smart Parking Prototype</h2>

              <p className="project-description">
                Led a team in developing a smart parking prototype that used
                camera input and an AI agent to classify parking spaces as
                available, occupied, or uncertain within a simulated parking
                environment.
              </p>

              <div className="project-role">
                <span>Project Role</span>
                <p>Team Lead</p>
              </div>

              <div className="project-technologies">
                <span>Raspberry Pi 5</span>
                <span>AI Agent</span>
                <span>Computer Vision</span>
                <span>Hardware Prototyping</span>
                <span>Team Leadership</span>
              </div>

              <p className="project-more">
                A detailed reflection on this project will be available in the
                Blog.
              </p>
            </div>
          </article>
        </section>

        <section className="portfolio-closing">
          <p className="portfolio-eyebrow">CONTINUING TO BUILD</p>

          <h2>Learning through experience.</h2>

          <p>
            These projects gave me opportunities to work with different
            technologies, collaborate with others, and apply technical concepts
            outside of traditional coursework.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;