import "../Styles/About.css";

const About = () => {
  let Kade;

  if (Kade === "passionate coding geek" && Kade === "compassionate human") {
    return "Catch me jammin' out and exploring the latest technologies in my free time.";
  } else {
    return "You got the wrong Kade :(";
  }

  return (
    <section id="about">
      <div className="title-cont">About</div>
      <div className="header-bar" />
      <div className="info-cont">
        <div className="skills">
          <div className="skill-box">
            <img
              alt="burning heart"
              src="https://cdn-icons-png.flaticon.com/512/177/177036.png"
            />
            <h2>Passionate</h2>
            <p>
              Passionate coding geek && compassionate person. Catch me jammin'
              out and exploring the latest technologies in my free time.
            </p>
          </div>
          <div className="skill-box">
            <img
              alt="brain lightbulb"
              src="https://cdn-icons-png.flaticon.com/512/3618/3618051.png"
            />
            <h2>Creative Mind</h2>
            <p>
              I've never shyed away from manifesting creative solutions to solve
              complex problems.
            </p>
          </div>
          <div className="skill-box">
            <img
              alt="burning heart"
              src="https://cdn-icons-png.flaticon.com/512/177/177036.png"
            />
            <h2>Passionate</h2>
            <p>
              Not only am I passionate about coding, but about learning in
              general. Find me exploring the latest cool technologies in my free
              time
            </p>
          </div>
        </div>
        <div className="about-text"></div>
      </div>
    </section>
  );
};
export default About;
