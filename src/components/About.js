import "../Styles/About.css";
import bulb from "../images/bulb.png";
import heart from "../images/heart.png";
import quick from "../images/fast-time.png";

const About = () => {
  return (
    <section id="about">
      <div className="title-cont">About</div>
      <div className="header-bar" />

      <div className="info-cont">
        <div className="me-cont">
          <div className="me-box">
            <img alt="burning heart" src={heart} />
            <h2>Passionate</h2>
            <p className="me-text">
              Passionate coding geek, but more importantly, just a compassionate
              person. Catch me jammin' out and exploring the latest technologies
              in my free time!
            </p>
          </div>
          <div className="me-box">
            <img alt="brain lightbulb" src={bulb} />
            <h2>Creative Mind</h2>
            <p className="me-text">
              I've never shied away from formulating creative solutions for
              complex problems. My experience in music engineering and arts &
              crafts translates to my work in many ways
            </p>
          </div>
          <div className="me-box">
            <img alt="burning heart" src={quick} />
            <h2>Quick Learner</h2>
            <p className="me-text">
              I'm confident in my ability to pick up on new concepts quick. I'll
              adapt to your tech stack with optimism and eagerness. Give me an
              opportunity to learn and I'll take it!
            </p>
          </div>
        </div>

        <div className="about-text">
          <div className="bio-wrap">
            <div className="me-img">.</div>
            <div className="bio">
              lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
              dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
              ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
            </div>
          </div>

          <div className=" pac-man skills"></div>
        </div>
      </div>
    </section>
  );
};
export default About;
