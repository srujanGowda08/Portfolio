import React from "react";
import "./myprojects.css";
import IMG1 from "../../assets/project-2.png";
import IMG2 from "../../assets/project-3.png";
import IMG3 from "../../assets/project-8.png";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Picto Hunt</h3>
          <small className="text-light">HTML|CSS | Unsplash API</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/srujanGowda08/PictoHunt"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://pictohunt-image.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>CareerFasten | Placement Roadmap Website for college</h3>
          <small className="text-light">HTML | CSS | JS | php | MySQL</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/srujanGowda08/careerFasten_Hosting"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://careerfastenhosting-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Fauna Flick</h3>
          <small className="text-light">MERN stack | ReactQuery TenStack</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/srujanGowda08/FaunaFlick"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://faunaflick-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;
