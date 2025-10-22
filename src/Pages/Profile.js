import React from "react";
import './profile.css'
import myImage from "../Assets/Pic.jpg";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Profile = () => {
  return (

    <section id="home" className="home">
      <div className="intro">
        <h2>Hello, I’m <span className="highlight">Steven A. Tejero</span></h2>
        <p>
          I’m a passionate student and aspiring <strong style={{ color: "#ed6ef9ff" }}>Web Designer</strong> who loves creating beautiful and functional websites. I’m driven by the goal of blending creativity and technology to design meaningful digital experiences that inspire and connect people.
        </p>

        <div className="social-links">
          <a href="https://www.facebook.com/Teven.Teben" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://github.com/Stevennn7815" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

      </div>
      <div className="profile-pic">
        {}
        <img src={myImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Profile;