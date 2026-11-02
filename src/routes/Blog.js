import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import posts from "../data/Posts";
import "./BlogStyles.css";

const Blog = () => {
  return (
    <>
      <Navbar />

      <main className="blog-page">
        <section className="blog-hero">
          <div className="blog-hero-content">
            <p className="blog-eyebrow">BLOG</p>

            <h1>
              Experiences behind the
              <span> work.</span>
            </h1>

            <p className="blog-intro">
              A closer look at the projects, technical experiences, and lessons
              that have helped shape my interests and development as a Computer
              Science student.
            </p>
          </div>
        </section>

        <section className="blog-posts">
          {posts.map((post, index) => (
            <article className="blog-feature" key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="blog-image-link"
                aria-label={`Read ${post.title}`}
              >
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.imageAlt} />
                </div>
              </Link>

              <div className="blog-feature-content">
                <div className="blog-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{post.date}</span>
                </div>

                <p className="blog-category">{post.category}</p>

                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="blog-excerpt">{post.excerpt}</p>

                <Link to={`/blog/${post.slug}`} className="read-article">
                  Read Article <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;