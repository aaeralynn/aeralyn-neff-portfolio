import React from "react";
import "./Resume.css"; // Optional: add your own styling

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p>
        Download my resume below or check out my technical skills and
        proficiencies.
      </p>

      <a
        href="/Aeralyn_Neff_Resume.pdf" // place your PDF in the public folder!
        download
        className="resume-download"
      >
        Download Resume
      </a>

      <div className="skills">
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3 / Sass</li>
            <li>JavaScript / TypeScript</li>
            <li>Vite</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>GraphQL (Apollo)</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div>
          <h3>Tools & Other</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Figma</li>
            <li>Postman</li>
            <li>Render / Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
