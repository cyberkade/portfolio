import "../Styles/About.css";
import bulb from "../images/bulb.png";
import heart from "../images/heart.png";
import quick from "../images/fast-time.png";
import Draggable from "react-draggable";

const About = () => {
  // onStart = () => {
  //   setDrags({activeDrags: ++this.state.activeDrags});
  // };

  // onStop = () => {
  //   setDrags({activeDrags: --this.state.activeDrags});
  // };

  // const dragHandlers = {onStart: onStart, onStop: onStop};

  return (
    <section id="about">
      <p className="title">About</p>
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
            <div className="me-img" />
            <div className="bio">
              lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
              dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
              ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
            </div>
          </div>

          <div className="skills">
            <Draggable bounds="parent">
              <h2 className="skill">JavaScript</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">CSS</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">HTML</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Reactjs</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Nodejs</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">PostgreSQL</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Redux</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Jest</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Cypress</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Context API</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Axios</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Express</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">SQL</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Git CLI</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Agile Management</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Algorithms</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Architecture</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Debugging</h2>
            </Draggable>
            <Draggable bounds="parent">
              <h2 className="skill">Deployment</h2>
            </Draggable>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
