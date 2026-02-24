import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Resume from "./routes/Resume";
import Portfolio from "./routes/Portfolio";
import Project from "./routes/Project";
import Blog from "./routes/Blog";
import Posts from "./routes/Posts";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/project" element={<Project />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
    
    </>
  );
}

export default App;
