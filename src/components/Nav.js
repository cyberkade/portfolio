import "../Styles/Nav.css";
import { useEffect, useState } from "react";
const Nav = ({ viewSection, navClass, setNavClass }) => {
  const [view, setView] = useState("");
  const stickNav = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log(window.screen);
      console.log(windowHeight);
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

    return () => {
      window.removeEventListener("scroll", stickNav);
    };
  }, []);

  return (
    <nav className={navClass}>
      <ul>
        <li
          className={view === "home" ? "active" : ""}
          onClick={() => {
            viewSection("");
            setView("home");
          }}
          k
        >
          Home
        </li>
        <li
          className={view === "about" ? "active" : ""}
          onClick={() => {
            viewSection("about");
            setView("about");
          }}
        >
          About
        </li>
        <li
          className={view === "projects" ? "active" : ""}
          onClick={() => {
            viewSection("projects");
            setView("projects");
          }}
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
      </ul>
    </nav>
  );
};
export default Nav;
