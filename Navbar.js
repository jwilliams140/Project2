import "./NavbarStyles.css";

import React, {useState} from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
    <div className="header">
        <Link to="/">
          <h1>Joshua Williams' Portfolio</h1>
        </Link>
        <ul className="nav-menu">
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
        <div className = "hamburger">
            <FaTimes size = {20} style = {{color: "#1F51FF"}
        }/>
            <FaBars size = {20} style = {{color: "#1F51FF"}
        }/>
        </div>
    </div>
  );
};

export default Navbar





