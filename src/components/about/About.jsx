import React from "react";
import "./About.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>1+ years working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>4+</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>3+ Completed </small>
          </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit necessitatibus quam, sequi doloremque reiciendis voluptatibus laboriosam quibusdam error, temporibus amet nesciunt, harum repellendus assumenda illo. Sit corrupti repellat voluptate quod.
          </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
