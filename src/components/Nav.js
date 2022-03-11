import "../Styles/Nav.css";
import { useEffect } from "react";
const Nav = ({ viewSection, navClass, setNavClass }) => {
  const stickNav = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight >= 995) {
        setNavClass("sticky");
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
        <li onClick={() => viewSection("")} k>
          Home
        </li>
        <li onClick={() => viewSection("about")}> About</li>
        <li onClick={() => viewSection("projects")}>Projects</li>
        <li onClick={() => viewSection("contact")}>Contact</li>
        <li onClick={() => viewSection("resume")}>Resume</li>
      </ul>
    </nav>
  );
};
export default Nav;
