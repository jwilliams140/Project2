import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import posts from "../data/Posts";
import "./BlogPostStyles.css";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />

        <main className="blog-not-found">
          <p className="post-eyebrow">BLOG</p>
          <h1>Post not found.</h1>
          <Link to="/blog">Return to Blog</Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="blog-post-page">
        <header className="post-header">
          <div className="post-header-content">
            <Link to="/blog" className="back-to-blog">
              ← Back to Blog
            </Link>

            <p className="post-eyebrow">{post.category}</p>

            <h1>{post.title}</h1>

            <p className="post-date">{post.date}</p>
          </div>
        </header>

        <div className="post-featured-image">
          <div className="post-image-frame">
            <img src={post.image} alt={post.imageAlt} />
          </div>
        </div>

        <article className="post-content">
          {post.sections.map((section, index) => (
            <section className="post-section" key={index}>
              {section.heading && <h2>{section.heading}</h2>}

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="post-end">
            <span></span>

            <p>Thanks for reading.</p>

            <Link to="/blog">
              View all posts <span>→</span>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;