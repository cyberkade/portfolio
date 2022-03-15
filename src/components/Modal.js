import React from "react";
import "../Styles/Modal.css";
import "../Styles/Carousel.css";
import SpotPlayer1 from "../images/SpotPlayer2.png";
import UD1 from "../images/ud.png";
import SpotPlayer2 from "../images/spotiCarousel.png";

import Carousel from "./Carousel";
function Modal({ title, tag, details, link }) {
  return (
    <div className="modal-wrap">
      <div className="mask"></div>
      <div className="modal">
        <Carousel paths={[SpotPlayer1, UD1, SpotPlayer2]} />
        <div className="info-box">
          <div className="site-title">{title}</div>
          <div className="tag">{tag}</div>
          <div className="details">{details}</div>
          {link === true && (
            <a href={link} target="_blank">
              <div class="button">
                <i class="mdi mdi-open-in-new"></i>VIEW SITE
              </div>
            </a>
          )}
        </div>
        <i className="close"></i>
      </div>
    </div>
  );
}

export default Modal;
