import "./FooterStyles.css";
import React from "react";
import { FaSchool, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className = "footer">
        <div className = "footer-container">
            <div className = "left">
                <div className = "location">
                    <FaSchool size = {20} style = {{ color:
                    "#fff", marginRight: "2rem" }} />
                    <div>
                        <p> CSUB Antelope Valley </p>
                        <p> 43909 30th Street West</p>
                    </div>
                </div>
                <div className = "phone"> 
                    <h4> <FaPhone size = {20} style = {{ color:
                    "#fff", marginRight: "2rem" }} />
                    (661) 952-5000 
                    </h4>
                </div>
                <div className = "email"> 
                    <h4> 
                    <FaMailBulk size = {20} style = {{ color:
                    "#fff", marginRight: "2rem" }} 
                    />
                    jwilliams140@csub.edu 
                    </h4>
                </div>
            </div>
            <div className = "right"></div>
            <h4> About Me </h4>
            <p> I am a CS student who enjoys hardware concepts </p>
            <div className = "social"> 
                    <FaLinkedin 
                    size = {20} 
                    style = {{ color: "#fff", marginRight: 
                        "2rem" }} 
                    />
                    <FaGithub 
                    size = {20} 
                    style = {{ color: "#fff", marginRight: 
                        "2rem" }} 
                    />
            </div>
        </div>
    </div>
  )
}

export default Footer




