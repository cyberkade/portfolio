import "../Styles/Nav.css";
import { useState, useEffect } from "react";
const Nav = () => {
  const [navClass, setNavClass] = useState("");

  const stickNav = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 997 ? setNavClass("sticky") : setNavClass("");
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
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Nav;
