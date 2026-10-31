import "./NavbarStyles.css";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? "header header-scrolled" : "header"}>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          JW
        </Link>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/resume" onClick={closeMenu}>
              Resume
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink to="/blog" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="contact-link"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;