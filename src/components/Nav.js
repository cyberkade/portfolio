import "../Styles/Nav.css";
import { useEffect } from "react";
const Nav = ({ viewAbout, navClass, setNavClass }) => {
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
        <li onClick={() => window.location.replace("/")} k>
          Home
        </li>
        <li onClick={() => viewAbout()}> About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Nav;
