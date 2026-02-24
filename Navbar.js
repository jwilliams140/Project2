import "./NavbarStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
        <Link to="/">
          <h1>Joshua Williams' Portfolio</h1>
        </Link>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>

            <li>
                <Link to="/resume">Resume</Link>
            </li>

            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>

            <li>
                <Link to="/project">Project</Link>
            </li>

            <li>
                <Link to="/blog">Blog</Link>
            </li>

            <li>
                <Link to="/posts">Posts</Link>
            </li>

            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  );
};

export default Navbar


