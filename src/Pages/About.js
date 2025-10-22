import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi! I’m <strong>Steven A. Tejero</strong>.  
          I’m deeply interested in Programming and Networking, where I can combine logical thinking and technical skills to build reliable and efficient systems. I enjoy designing and developing applications that solve real-world problems while ensuring they are scalable and maintainable. In networking, I find it exciting to configure networks, optimize connectivity, troubleshoot issues, and implement security measures to protect data and resources. I also like exploring emerging technologies, learning new programming languages, and experimenting with frameworks to stay up-to-date with the ever-evolving tech landscape. My goal is to create dynamic applications and robust network solutions that make technology work seamlessly together, improving user experiences and enabling innovation.
        </p>
      </div> 

     <div className="divider education-project"></div>

      <div className="education-content">
        <h2>Academic Background</h2>
        <div className="education-list">
          <div className="education-card">
            <h3>Cebu Technological University - Danao Campus</h3>
            <p>Bachelor of Information Technology, 4th Year</p>
          </div>
          <div className="education-card">
            <h3>Computer System Servicing NCII</h3>
            <p>Certified in Computer System Servicing NCII to enhance technical skills.</p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website built using React, showcasing my projects and skills.</p>
          </div>
          <div className="project-card">
            <h3>Messaging System</h3>
            <p>A small one way locally running messaging system.</p>
          </div>
          <div className="project-card">
            <h3>CRUD Application</h3>
            <p>A simple CRUD system application.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
