import "../Styles/Projects.css";

import React, { useEffect } from "react";

const Porfolio = () => {
  useEffect(() => {}, []);
  return (
    <>
      <section className="projects-section" id="projects">
        <p className="title">Projects</p>
        <div className="header-bar" />
        {/* <div className="sort-wrap">
          <button className="sort active">All</button>
          <button className="sort">React-JS</button>
          <button className="sort">Node.js</button>
          <button className="sort">JavaScript</button>
        </div> */}
        <div className="projects-cont">
          <div className="card">
            <div className="projects-text">
              <h3 className="project-title">Spotistats Music Player</h3>
              <p className="project-languages">React JS / Node.js</p>
            </div>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="card ud">
            <div className="projects-text">
              <h3 className="project-title">Underdog Devs</h3>
              <p className="project-languages">React JS / Express</p>
            </div>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="card">
            <div className="projects-text">
              <h3 className="project-title">Project Name</h3>
              <p className="project-languages">Languages Used</p>
            </div>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="card">
            <div className="projects-text">
              <h3 className="project-title">Project Name</h3>
              <p className="project-languages">Languages Used</p>
            </div>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="card">
            <div className="projects-text">
              <h3 className="project-title">Project Name</h3>
              <p className="project-languages">Languages Used</p>
            </div>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="card">
            <div className="projects-text">
              <h3 className="project-title">Project Name</h3>
              <p className="project-languages">Languages Used</p>
            </div>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </section>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#2b2c2e" stroke="#2b2c2e"></path>
      </svg>
    </>
  );
};

export default Porfolio;
