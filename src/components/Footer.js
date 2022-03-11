import "../Styles/Footer.css";
import { useState } from "react";
import Chevron from "../images/chevronBlue.png";
import LinkedIn from "../images/linkedin-24.png";
import GitHub from "../images/github.png";

const Footer = ({ viewSection }) => {
  return (
    <footer id={"footer"}>
      <div className={"footer-wrap"}>
        <img
          onClick={() => viewSection("")}
          className={"chevron"}
          alt={"return to home"}
          src={Chevron}
        ></img>
        <div className="socials-wrap">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kadeg/"
          >
            <img
              className="social-logo"
              alt="linkedIn logo link"
              src={LinkedIn}
            ></img>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/cyberkade"
          >
            <img
              className="social-logo github"
              alt="GitHub logo link"
              src={GitHub}
            ></img>
          </a>
        </div>
        {/* <div>
            <a target="_blank" rel="noreferrer" href="">
              <img
                className="social-logo"
                alt="CodePen logo link"
                src={}
              ></img>
            </a>
          </div> */}
        <p>
          Kade Griffith <span className="copyright">@2022</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
