import "../Styles/Projects.css";
import Card from "./Card";
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
          <Card
            name={"Spotistats Music Player"}
            languages="React JS / Nodes.js"
          />
          <Card tag="ud" name="Underdog Devs" languages="React JS / Express" />
          <Card tag="ud" name="Underdog Devs" languages="React JS / Express" />
          <Card tag="ud" name="Underdog Devs" languages="React JS / Express" />
          <Card tag="ud" name="Underdog Devs" languages="React JS / Express" />
          <Card tag="ud" name="Underdog Devs" languages="React JS / Express" />
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
