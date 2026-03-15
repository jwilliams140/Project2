import { useParams, Link } from "react-router-dom";
import { projects } from "./Projects";

const Project = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>

      <img src={project.image} alt={project.title} />

      <p>{project.description}</p>

      <h3>Tech Stack</h3>
      <ul>
        {project.tech.map((techItem, index) => (
          <li key={index}>{techItem}</li>
        ))}
      </ul>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      )}

      <div style={{ marginTop: "20px" }}>
        <Link
          to="/portfolio"
          style={{
            color: "rgb(255, 255, 255)",
            textDecoration: "none",
            fontWeight: "bold",
            border: "1px solid rgb(255, 255, 255)",
            borderRadius: "6px",
            padding: "0.5rem 1rem",
            transition: "all 0.2s",
          }}
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Project;



