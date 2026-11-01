import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "../components/ContactStyles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      setStatus("success");
      setStatusMessage(
        "Your message was sent successfully. I'll get back to you as soon as I can."
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "Your message could not be sent. Please try again later."
      );
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <p className="contact-eyebrow">CONTACT</p>

            <h1>
              Let's start a
              <span> conversation.</span>
            </h1>

            <p className="contact-intro">
              Whether you'd like to discuss an opportunity, ask a question, or
              simply connect, feel free to send me a message.
            </p>
          </div>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <p className="contact-section-label">GET IN TOUCH</p>

            <h2>I'd be happy to hear from you.</h2>

            <p className="contact-info-text">
              I'm currently a Computer Science student building toward a career
              in information technology and developing my skills through
              education, technical training, and hands-on learning.
            </p>

            <div className="contact-connect">
              <p>Connect with me</p>

              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/joshuajosephwilliams1/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/jwilliams140"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="7"
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <span>→</span>
              </button>

              {statusMessage && (
                <div
                  className={`form-status ${
                    status === "success" ? "success" : "error"
                  }`}
                  role="status"
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;