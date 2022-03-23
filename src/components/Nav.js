import "../Styles/Nav.css";
import { useEffect, useState } from "react";
import menu from "../images/menu-24.png";

const Nav = ({ viewSection, navClass, setNavClass }) => {
  const [clicked, setClicked] = useState("");
  const [view, setView] = useState("");
  const [mobile, setMobile] = useState(null);
  let windowWidth = window.innerWidth;
  console.log(windowWidth);
  const checkWidth = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    // console.log(windowWidth);
    // console.log(mobile);
  };

  const displayNav = () => {
    if (clicked === "clicked") {
      setClicked("");
    } else setClicked("clicked");
  };

  const stickNav = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // console.log(window);
      // console.log(windowHeight);
      if (windowHeight >= 2911) {
        setView("contact");
      } else if (windowHeight >= 2030) {
        setView("projects");
      } else if (windowHeight >= 945) {
        setView("about");
        setNavClass("sticky");
      } else if (windowHeight < 944) {
        setView("home");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNav);
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("scroll", stickNav);
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <nav className={navClass}>
      <ul>
        {windowWidth > 600 ? (
          <>
            <li
              className={view === "home" ? "active" : ""}
              onClick={() => viewSection("")}
            >
              Home
            </li>
            <li
              className={view === "about" ? "active" : ""}
              onClick={() => viewSection("about")}
            >
              About
            </li>
            <li
              className={view === "projects" ? "active" : ""}
              onClick={() => viewSection("projects")}
            >
              Projects
            </li>
            <li
              className={view === "contact" ? "active" : ""}
              onClick={() => viewSection("contact")}
            >
              Contact
            </li>
            <li onClick={() => viewSection("resume")}>Resume</li>
          </>
        ) : (
          <li onClick={() => displayNav()} className={`${clicked} dropdown `}>
            <img src={menu} />
            <ul className={`dropdown-menu `}>
              <li
                className={view === "home" ? "active" : ""}
                onClick={() => viewSection("")}
              >
                Home
              </li>
              <li
                className={view === "about" ? "active" : ""}
                onClick={() => viewSection("about")}
              >
                About
              </li>
              <li
                className={view === "projects" ? "active" : ""}
                onClick={() => viewSection("projects")}
              >
                Projects
              </li>
              <li
                className={view === "contact" ? "active" : ""}
                onClick={() => viewSection("contact")}
              >
                Contact
              </li>
              <li className="resume">Resume</li>
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
