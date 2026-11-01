import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import resumePdf from "../assets/resume.pdf";
import "../components/ResumeStyles.css";

const Resume = () => {
  return (
    <>
      <Navbar />

      <main className="resume-page">
        <section className="resume-hero">
          <div className="resume-hero-content">
            <div>
              <p className="resume-eyebrow">RESUME</p>

              <h1>
                Building practical skills for a career in
                <span> information technology.</span>
              </h1>

              <p className="resume-intro">
                Computer Science student developing hands-on experience with
                operating systems, computer hardware, networking, and
                troubleshooting while working toward CompTIA A+ certification.
              </p>
            </div>

            <a
              href={resumePdf}
              download="Joshua-Williams-Resume.pdf"
              className="resume-download-btn"
            >
              Download Resume
              <span>↓</span>
            </a>
          </div>
        </section>

        <section className="resume-content">
          <div className="resume-section resume-summary">
            <div className="resume-section-label">
              <span>01</span>
              <p>Professional Summary</p>
            </div>

            <div className="resume-section-content">
              <p className="summary-text">
                Computer Science student with hands-on experience in Windows
                and Linux systems, networking fundamentals, and hardware
                troubleshooting through technical coursework and specialized
                IT training. Interested in pursuing an IT Support internship
                where I can apply my troubleshooting skills, continue learning
                from experienced technicians, and provide technical support to
                end users. Currently studying toward A+ certification.
              </p>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-section-label">
              <span>02</span>
              <p>Technical Skills</p>
            </div>

            <div className="resume-section-content">
              <div className="skills-grid">
                <article className="skill-group">
                  <h3>Operating Systems</h3>
                  <div className="skill-tags">
                    <span>Windows 10/11</span>
                    <span>Linux</span>
                    <span>Command Line</span>
                  </div>
                </article>

                <article className="skill-group">
                  <h3>Hardware</h3>
                  <div className="skill-tags">
                    <span>Desktop Hardware</span>
                    <span>RAM Upgrades</span>
                    <span>Storage Upgrades</span>
                    <span>Peripheral Installation</span>
                    <span>PC Troubleshooting</span>
                  </div>
                </article>

                <article className="skill-group">
                  <h3>Networking</h3>
                  <div className="skill-tags">
                    <span>TCP/IP</span>
                    <span>IPv4 Addressing</span>
                    <span>LAN Configuration</span>
                    <span>Wired Networking</span>
                    <span>Wireless Networking</span>
                  </div>
                </article>

                <article className="skill-group">
                  <h3>Technical Tools</h3>
                  <div className="skill-tags">
                    <span>File Explorer</span>
                    <span>Command Prompt</span>
                    <span>Disk Management</span>
                    <span>Linux Terminal</span>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-section-label">
              <span>03</span>
              <p>Education</p>
            </div>

            <div className="resume-section-content">
              <article className="resume-entry education-entry">
                <div className="entry-header">
                  <div>
                    <h3>Bachelor of Computer Science</h3>
                    <p className="entry-organization">
                      California State University, Bakersfield
                    </p>
                  </div>

                  <div className="entry-meta">
                    <span>Lancaster, California</span>
                    <span>Anticipated Graduation: 2027</span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-section-label">
              <span>04</span>
              <p>Relevant IT Experience</p>
            </div>

            <div className="resume-section-content">
              <div className="experience-list">
                <article className="resume-entry">
                  <div className="entry-header">
                    <div>
                      <h3>Computer Networking & Operating Systems</h3>
                      <p className="entry-organization">
                        Antelope Valley College
                      </p>
                    </div>

                    <span className="entry-date">Spring 2021</span>
                  </div>

                  <ul>
                    <li>
                      Completed coursework focused on operating systems and
                      computer networking.
                    </li>
                    <li>
                      Configured Windows and Linux systems through hands-on lab
                      assignments.
                    </li>
                    <li>
                      Practiced file management, permissions, storage
                      configuration, and command-line administration.
                    </li>
                    <li>
                      Applied networking and server concepts through classroom
                      projects and technical exercises.
                    </li>
                  </ul>
                </article>

                <article className="resume-entry">
                  <div className="entry-header">
                    <div>
                      <h3>IT Hardware & Networking Training</h3>
                      <p className="entry-organization">
                        Specialized High School Program
                      </p>
                    </div>

                    <span className="entry-date">2018 – 2020</span>
                  </div>

                  <ul>
                    <li>
                      Completed year-long TestOut PC Pro (CompTIA A+) and
                      Network Pro coursework covering computer hardware,
                      Windows operating systems, networking fundamentals,
                      security, and troubleshooting.
                    </li>
                    <li>
                      Performed hands-on LabSim exercises and practical
                      assessments designed to reinforce hardware installation,
                      operating system configuration, networking concepts, and
                      common IT support tasks.
                    </li>
                    <li>
                      Successfully completed all course modules, quizzes,
                      virtual labs, and comprehensive practice assessments.
                    </li>
                    <li>
                      Earned a score of 1920/2000 on the program's
                      comprehensive CompTIA A+ practice exam.
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-section-label">
              <span>05</span>
              <p>Additional Experience</p>
            </div>

            <div className="resume-section-content">
              <article className="resume-entry">
                <p className="additional-experience">
                  Assisted a family friend in diagnosing and improving the
                  performance of a slow Windows laptop by identifying
                  unnecessary startup programs and performing basic system
                  maintenance.
                </p>
              </article>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-section-label">
              <span>06</span>
              <p>Certifications</p>
            </div>

            <div className="resume-section-content">
              <article className="certification-card">
                <div className="certification-indicator"></div>

                <div>
                  <h3>CompTIA A+</h3>
                  <p>In Progress</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="resume-cta">
          <p className="resume-eyebrow">FULL RESUME</p>

          <h2>Want a copy?</h2>

          <p>
            Download the PDF version of my resume for a concise overview of my
            education, technical skills, training, and experience.
          </p>

          <a
            href={resumePdf}
            download="Joshua-Williams-Resume.pdf"
            className="resume-download-btn"
          >
            Download Resume
            <span>↓</span>
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Resume;