import React, { useEffect, useState } from "react";
import arrowLeft from "../images/arrow-left.png";
import arrowRight from "../images/arrow-right.png";

function Carousel({ paths }) {
  const [current, setCurrent] = useState(0);
  const length = paths.length;
  const next = () => {
    return setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    return setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const autoScroll = setTimeout(() => {
      next();
    }, 5000);
    return () => clearTimeout(autoScroll);
    // eslint-disable-next-line
  }, [current]);

  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        {paths.map((element, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {/* {index === current && ( */}
              <div
                style={{
                  background: ` top / cover no-repeat url(${element}) `,
                }}
                className="top-image-c"
                alt="Kade's app screenshot"
              ></div>
              {/* )} */}
            </div>
          );
        })}
      </div>

      <div className="btn-cont">
        <button className="scroll left" onClick={prev}>
          <img alt="arrow left" src={arrowLeft} />
        </button>
        <button className="scroll right" onClick={next}>
          <img alt="arrow right" src={arrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
