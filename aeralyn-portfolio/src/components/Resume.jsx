import React from "react";

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my resume below and check out a few of my key proficiencies!
      </p>

      <a
        href="/assets/Aeralyn-Neff-Resume.pdf"
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
