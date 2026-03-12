import { useParams, Link } from "react-router-dom";
import { posts } from "./Posts";

const BlogPost = () => {

  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className="blog-detail">

      <h1>{post.title}</h1>

      <p className="blog-date">{post.date}</p>

      <p>{post.content}</p>

      <Link to="/blog">← Back to Blog</Link>

    </div>
  );
};

export default BlogPost;