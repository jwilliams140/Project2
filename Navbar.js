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
        </u1>
    </div>
  )
}

export default Navbar
