import "../Styles/Nav.css";
import { useEffect, useState, useRef } from "react";
import menu from "../images/menu-24.png";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const Nav = ({
  // viewSection,
  scrollSmoothHandler,
  navClass,
  setNavClass,
  aboutRef,
  projectsRef,
  contactRef,
  landingRef,
}) => {
  const [clicked, setClicked] = useState("");
  const [view, setView] = useState("");
  const { width } = useWindowDimensions();

  const displayNav = () => {
    if (clicked === "clicked") {
      setClicked("");
    } else setClicked("clicked");
  };

  const stickNav = () => {
    if (window !== undefined) {
      let pageLocation = window.scrollY;
      if (pageLocation >= 2911) {
        setView("contact");
      } else if (pageLocation >= 2030) {
        setView("projects");
      } else if (pageLocation >= 945) {
        setView("about");
        setNavClass("sticky");
      } else if (pageLocation < 944) {
        setView("home");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNav);

    return () => {
      window.removeEventListener("scroll", stickNav);
    };
  }, []);

  return (
    <nav className={navClass}>
      <ul>
        {width > 600 ? (
          <>
            <li
              className={view === "home" ? "active" : ""}
              onClick={() => scrollSmoothHandler(landingRef)}
            >
              Home
            </li>
            <li
              className={view === "about" ? "active" : ""}
              onClick={() => scrollSmoothHandler(aboutRef)}
            >
              About
            </li>
            <li
              className={view === "projects" ? "active" : ""}
              onClick={() => scrollSmoothHandler(projectsRef)}
            >
              Projects
            </li>
            <li
              className={view === "contact" ? "active" : ""}
              onClick={() => scrollSmoothHandler(contactRef)}
            >
              Contact
            </li>
            {/* <li onClick={() => viewSection("resume")}>Resume</li> */}
          </>
        ) : (
          <li
            onClick={() => displayNav()}
            aria-label={"menu"}
            className={`${clicked} dropdown `}
          >
            <img src={menu} />
            <ul className={`dropdown-menu `}>
              <li
                className={view === "home" ? "active" : ""}
                onClick={() => scrollSmoothHandler(landingRef)}
              >
                Home
              </li>
              <li
                className={view === "about" ? "active" : ""}
                onClick={() => scrollSmoothHandler(aboutRef)}
              >
                About
              </li>
              <li
                className={view === "projects" ? "active" : ""}
                onClick={() => scrollSmoothHandler(projectsRef)}
              >
                Projects
              </li>
              <li
                className={view === "contact" ? "active" : ""}
                onClick={() => scrollSmoothHandler(contactRef)}
              >
                Contact
              </li>
              {/* <li className="resume">Resume</li> */}
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
