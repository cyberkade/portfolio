import React from "react";
import "../Styles/Modal.css";
import "../Styles/Carousel.css";
import SS1 from "../images/ss1.png";
import SS2 from "../images/ss2.png";
import SS3 from "../images/ss3.png";

import UD1 from "../images/ud1.png";

import Carousel from "./Carousel";
const Modal = ({ toggleModal, name, hide }) => {
  const Spotistats = "https://my-spotistats.netlify.app/";
  const UnderdogDevs = "https://a.underdogdevs.dev/login";
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
        <Carousel paths={[SS1, SS3, SS2]} />
        <div className="info-box">
          <div className="site-title">{name}</div>

          {name === "Spotistats Music Player" && (
            <>
              <div className="tag">Music Tracking & Streaming Service</div>
              <div className="details">
                Spotistats is an app for those REAL music fanatics out there.
                Check your listening stats and vibe with your favorite song's
                lyrics. Created utilizing Spotify API.
              </div>
            </>
          )}

          {hide === false && (
            <a {...siteLink} rel="noreferrer" target="_blank">
              <div class="button">
                <i class="mdi mdi-open-in-new"></i>VIEW SITE
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
