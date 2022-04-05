import React from "react";
import "../Styles/Modal.css";
import "../Styles/Carousel.css";
import externalLink from "../images/external-link.png";
import gitHub from "../images/github-32.png";

import SS1 from "../images/ss1.png";
import SS2 from "../images/ss2.png";
import SS3 from "../images/ss3.png";
import UD1 from "../images/ud1.png";
import UD2 from "../images/ud2.png";
import UD3 from "../images/ud3.png";
import MOV1 from "../images/mov.png";
import MOV2 from "../images/mov2.png";

import brawl1 from "../images/brawl1.png";
import brawl2 from "../images/brawl2.png";

import Carousel from "./Carousel";
const Modal = ({ toggleModal, name }) => {
  const siteLink =
    name === "Spotistats Music Player"
      ? { href: "https://my-spotistats.netlify.app/" }
      : name === "Underdog Devs"
      ? { href: "" }
      : name === "Museum of Vibes"
      ? { href: "" }
      : name === "Brawl!"
      ? { href: "https://gobrawl.netlify.app/" }
      : {};

  return (
    <div className="modal-wrap">
      <div className="mask"></div>
      <div className="modal">
        {name === "Spotistats Music Player" && (
          <Carousel paths={[SS1, SS3, SS2]} />
        )}
        {name === "Underdog Devs" && <Carousel paths={[UD1, UD2, UD3]} />}
        {name === "Museum of Vibes" && <Carousel paths={[MOV1, MOV2]} />}
        {name === "Brawl!" && <Carousel paths={[brawl1, brawl2]} />}
        <div className="info-box">
          <div className="site-title">{name}</div>

          {name === "Spotistats Music Player" && (
            <>
              <div className="tag">Music Tracking & Streaming Service</div>
              <div className="details">
                Spotistats is an app for those REAL music fanatics out there.
                Check out your listening stats and vibe with your favorite
                song's lyrics. Built with React JS, CSS, and Node.js; utilizing
                Spotify API.
              </div>
            </>
          )}

          {name === "Underdog Devs" && (
            <>
              <div className="tag">Edutech Tool</div>
              <div className="details">
                Underdog Devs is a group of software engineers helping aspiring
                developers who are either formerly incarcerated or from an
                economically disadvantaged background.
                <br /> <br /> Built with React JS and Express, our app aids with
                keeping track of resources, onboarding new mentees & mentors,
                scheduling meetings, organizing events for the community, and
                much more!
              </div>
            </>
          )}

          {name === "Museum of Vibes" && (
            <>
              <div className="tag">Virtual Art Museum</div>
              <div className="details">
                Museum of Vibes is a virtual museum of digital art constructed
                with JavaScript & CSS to curate unique experiences fitting to
                the theme of art on display.
              </div>
            </>
          )}

          {name === "Brawl!" && (
            <>
              <div className="tag">Multiplayer Fighting Game</div>
              <div className="details">
                Brawl! brings JavaScript classes and event listeners together
                with the Canvas API to create an eye catching fighter game with
                fancy animations and pixel art sprites. Take it back to the old
                days and have some fun playing with a friend on the same
                keyboard!
              </div>
            </>
          )}
          <a {...siteLink} rel="noreferrer" target="_blank">
            <div class="button2">
              <img src={gitHub} alt="github site link" />
            </div>
          </a>
          {siteLink.href !== "" && (
            <a {...siteLink} rel="noreferrer" target="_blank">
              <div class="button">
                <img src={externalLink} alt="external link" />
                VIEW SITE
              </div>
            </a>
          )}
        </div>
        <i onClick={() => toggleModal(null, true)} className="close">
          &times;
        </i>
      </div>
    </div>
  );
};

export default Modal;
