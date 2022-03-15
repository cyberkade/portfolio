import React from "react";

function Card({ name, languages, tag }) {
  return (
    <div className={`card ${tag}`}>
      <div className="projects-text">
        <h3 className="project-title">{name} </h3>
        <p className="project-languages">{languages}</p>
      </div>
      <button className="learn-more">Learn More</button>
    </div>
  );
}

export default Card;
