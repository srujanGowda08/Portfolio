import React from "react";
import "./about.css";
import myImage from "../../assets/me.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                BE in Computer Science <br />
                <i>Malnad College of Engineering.</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current CGPA</h5>
              <small>8.05</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Web Development</li>
                  <li>Mobile Applications</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I am Srujan, a final-year Computer Science Engineering student with
            a strong passion for web development and software engineering. I
            have hands-on experience in building innovative solutions using the
            MERN stack and React Native. With a knack for solving real-world
            problems, I’ve contributed to projects ranging from social media
            platforms to resource hubs. I thrive on continuous learning and am
            actively preparing for placements while exploring entrepreneurship
            and SaaS development ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
