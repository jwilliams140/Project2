import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { posts } from "../data/Posts";
import "./BlogStyles.css";

const Blog = () => {
  return (
    <div>
      <Navbar />

      <Banner heading="BLOG" />

      <div className="blog-container">

        {posts.map((post) => (
          <div className="blog-card" key={post.id}>

            <h2>{post.title}</h2>

            <p className="blog-date">{post.date}</p>

            <p>{post.excerpt}</p>

            <Link to={`/blog/${post.slug}`}>
              Read More →
            </Link>

          </div>
        ))}

      </div>

      <Footer />
    </div>
  );
};

export default Blog;