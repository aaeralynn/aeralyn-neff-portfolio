import React from "react";
import "./AboutMe.css"; // Importing the CSS file for this component

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <h3>Aeralyn Neff</h3>

      <img
        src="https://i.imgur.com/f8KPu4N.jpeg"
        alt="Photo of myself"
        style={{ width: "200px", borderRadius: "50%" }}
      />

      <p>
        I'm an enthusiastic beginner in web development, currently exploring the
        world of coding through my first boot camp, and I hope to bring a fresh
        perspective and a strong drive to learn and grow in the tech industry.
        By day I work as a team lead at a movie theater, but my true passion
        lies in building; I love painting, sculpting, cooking and experimenting
        with different forms of artistic expression. This creative background
        fuels my excitement for building and designing in the digital space. I'm
        eager to blend my desire to create with my growing coding knowledge to
        make innovative and useful web applications.
      </p>

      <h4>Skills</h4>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>Typescript</li>
        <li>Python</li>
      </ul>
    </section>
  );
};

export default AboutMe;
