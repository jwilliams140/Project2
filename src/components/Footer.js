import "./FooterStyles.css";
import React from "react";
import { FaSchool } from "react-icons/fa";

const Footer = () => {
  return (
    <div className = "footer">
        <div className = "footer-cotainer">
            <div className = "left">
                <div className = "location">
                    <FaSchool />
                </div>
            </div>

            <div className = "right"></div>
        </div>
    </div>
  )
}

export default Footer

