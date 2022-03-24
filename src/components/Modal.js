import React from "react";
import "../Styles/Modal.css";
import "../Styles/Carousel.css";
import externalLink from "../images/external-link.png";

import SS1 from "../images/ss1.png";
import SS2 from "../images/ss2.png";
import SS3 from "../images/ss3.png";
import UD1 from "../images/ud1.png";
import UD2 from "../images/ud2.png";
import UD3 from "../images/ud3.png";

import MOV1 from "../images/mov.png";
import MOV2 from "../images/mov2.png";
// import MOV3 from "../images/mov3.png";

import Carousel from "./Carousel";
const Modal = ({ toggleModal, name }) => {
  const Spotistats = "https://my-spotistats.netlify.app/";
  const UnderdogDevs = "";
  const MOV = "";

  const siteLink =
    name === "Spotistats Music Player"
      ? { href: Spotistats }
      : name === "Underdog Devs"
      ? { href: UnderdogDevs }
      : name === "Museum of Vibes"
      ? { href: MOV }
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
