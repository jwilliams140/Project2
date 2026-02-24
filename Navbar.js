import "./NavbarStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="header">
        <Link to="/">
          <h1>Joshua Williams' Portfolio</h1>
        </Link>
        <u1>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/">About</Link>
            </li>

            <li>
                <Link to="/">Resume</Link>
            </li>

            <li>
                <Link to="/">Portfolio</Link>
            </li>

            <li>
                <Link to="/">Project</Link>
            </li>

            <li>
                <Link to="/">Blog</Link>
            </li>

            <li>
                <Link to="/">Posts</Link>
            </li>
            
            <li>
                <Link to="/">Contact</Link>
            </li>
        </u1>
    </div>
  )
}

export default Navbar

