import React, { useState } from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.section`
  padding: 30px;
  color: white;

  h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-family: "Share Tech Mono", serif;

    border-bottom: 2px solid white;
    padding-bottom: 10px;
    // text-align: center;
  }

  .filter-buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    button {
      margin: 0 10px;
      padding: 10px 20px;
      background-color: white;
      color: black;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: gray;
        color: white;
      }

      &.active {
        background-color: gray;
        color: white;
      }
    }
  }

  .projects-grid {
    display: flex;
    justify-content: center; 
    gap: 0; 
    flex-wrap: wrap;

    .project-card {
      background-color: #1a1a1a;
      border-radius: 10px;
      overflow: hidden;
      width: 300px; 
      margin: 10px; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
      }

      img {
        width: 100%; 
        height: 200px; 
        object-fit: cover; 
      }

      .project-content {
        padding: 15px;

        h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          text-align: center;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 10px;
          text-align: center;
        }

        a {
          color: #00bcd4;
          font-size: 1rem;
          text-decoration: none;
          display: block;
          text-align: center;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const playClickSound = () => {
  const audio = new Audio("/sounds/click.mp3");
  audio.play();
};

const projectsData = [
  {
    id: 1,
    category: "Web",
    title: "Portfolio Website",
    image: "/images/web.jpg",
    link: "https://github.com/manasarao30/portfolio-website",
  },
  {
    id: 2,
    category: "Web",
    title: "Kanbas: Online Learning Management System",
    image: "/images/lms.webp",
    link: "https://github.com/manasarao30/kanbas-react-web-app",
  },
  {
    id: 3,
    category: "Web",
    title: "Flappy Bird Game",
    image: "/images/flappy.webp",
    link: "https://github.com/manasarao30/Flappy-Bird-Game",
  },
  {
    id: 4,
    category: "Cloud",
    title: "AWS Cloud Resume",
    image: "/images/aws.jpg",
    link: "https://github.com/manasarao30/aws-cloud-resume",
  },
  {
    id: 5,
    category: "Cloud",
    title: "Serverless Application",
    image: "/images/serverless.webp",
    link: "https://github.com/manasarao30/serverless-app",
  },
  {
    id: 6,
    category: "ML",
    title: "Advanced User Authentication using Mouse Dynamics",
    image: "./images/mouse.jpg",
    link: "https://github.com/manasarao30/MouseDynamics",
  },
  {
    id: 7,
    category: "Data Analysis",
    title: "Netflix Tableau Dashboard",
    image: "/images/netflix.png",
    link: "https://public.tableau.com/app/profile/manasa.rao1397/viz/NetflixDashboard_17061227525110/Netflix",
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <ProjectsWrapper id="projects">
      <h2>Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Web", "Cloud", "ML", "Data Analysis"].map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => {
              playClickSound();
              setFilter(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => {
              playClickSound();
              window.open(project.link, "_blank");
            }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Demo/GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </ProjectsWrapper>
  );
};

export default ProjectsSection;
