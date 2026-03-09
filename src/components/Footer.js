import "./FooterStyles.css";
import React from "react";
import { FaSchool } from "react-icons/fa";

const Footer = () => {
  return (
    <div className = "footer">
        <div className = "footer-cotainer">
            <div className = "left">
                <div className = "location">
                    <FaSchool size = {20} style = {{ color:
                    "#fff", marginRight: "2rem" }} />
                </div>
            </div>

            <div className = "right"></div>
        </div>
    </div>
  )
}

export default Footer


