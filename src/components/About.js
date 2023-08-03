import "../Styles/About.css";
import bulb from "../images/bulb.png";
import heart from "../images/heart.png";
import quick from "../images/fast-time.png";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const About = ({ aboutRef }) => {
  const { width } = useWindowDimensions();

  return (
    <section ref={aboutRef} id="about">
      <p className="title">About</p>
      <div className="header-bar" />

      <div className="about-cont">
        <div className="me-cont">
          <div className="me-box mobile">
            <div className="icon-cont">
              <img alt="brain lightbulb" src={bulb} />
              <h2>Creative Mind</h2>
            </div>
            <p className="me-text">
              I've never shied away from formulating creative solutions for
              complex problems. My past experience in music engineering and
              arts/crafts emerges in my work.
            </p>
          </div>
          <div className="me-box mobile">
            <div className="icon-cont">
              <img alt="burning heart" src={quick} />
              <h2>Quick Learner</h2>
            </div>
            <p style={{ fontWeight: "bold" }} className="me-text">
              I am confident in my ability to pick up on new concepts quick.
              I'll adapt to your tech stack with optimism and eagerness. Give me
              an opportunity to learn and I'll take it!
            </p>
          </div>
          <div className="me-box mobile">
            <div className="icon-cont">
              <img alt="burning heart" src={heart} />
              <h2>Passionate</h2>
            </div>
            <p className="me-text">
              Passionate coding geek, but more importantly, just a compassionate
              person. Catch me jammin' out and exploring the latest technologies
              in my free time!
            </p>
          </div>
        </div>

        <div className="info-cont">
          <div className="bio-wrap">
            <div className="me-img" />
            <div style={{ fontWeight: "bold" }} className="bio">
              <p style={{ fontWeight: "bold" }}>Who Am I?</p>
              <br /> I am a Full Stack Developer looking for job opportunities
              that encourage growth. As long as I am improving my existing
              skills and learning new concepts I am a happy guy!
            </div>
          </div>

          <div className="skills">
            <div className="skill-wrap">
              <h2 className="skill">JavaScript</h2>
              <h2 className="skill">CSS</h2>
              <h2 className="skill">HTML</h2>
              <h2 className="skill">Reactjs</h2>
              <h2 className="skill">Nodejs</h2>
              <h2 className="skill">PostgreSQL</h2>
              <h2 className="skill">Redux</h2>
              <h2 className="skill">Jest</h2>
              <h2 className="skill">Algorithms</h2>
              {width > 760 && <h2 className="skill">Deployment</h2>}
            </div>

            <div className="skill-wrap">
              <h2 className="skill">Cypress</h2>
              <h2 className="skill">Context API</h2>
              <h2 className="skill">Axios</h2>
              <h2 className="skill">Express</h2>
              <h2 className="skill">SQL</h2>
              <h2 className="skill">PHP</h2>
              <h2 className="skill">Go</h2>
              <h2 className="skill">Git CLI</h2>
              <h2 className="skill">Agile Methodology</h2>
              {/* {windowWidth > 760 && <h2 className="skill">Agile Management</h2>} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
