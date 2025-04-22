import React from "react";
import "../styles/Resume.css"; // Importing the CSS file for this component

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <p>Download my resume and view my newly learned skills below!</p>

      <a
        href="/public/assets/Copy Of Resume.pdf"
        download
        className="resume-download"
      >
        📄 Download My Resume
      </a>

      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>CSS</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
};

export default Resume;
