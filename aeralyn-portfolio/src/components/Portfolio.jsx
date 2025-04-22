import React from "react";
import "../styles/Portfolio.css";

import MainPage from "../assets/MainPage.png";
import Main from "../assets/Main.png";

const projects = [
  {
    title: "My Movie Critic",
    image: Main,
    deployedUrl: "https://lwebert.github.io/Project1-Team2/",
    githubUrl: "https://github.com/lwebert/Project1-Team2",
  },
  {
    title: "Career Crush",
    deployedUrl: "https://careercrush.onrender.com/",
    githubUrl: "https://github.com/JoseMCabreraT/CareerCrush",
  },
  {
    title: "GameDay Goods",
    image: MainPage,
    deployedUrl: "",
    githubUrl: "https://github.com/stanmoriasi/gamedaygoods",
  },
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <p>Here are a few of the projects I've worked on so far:</p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="portfolio-links">
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
