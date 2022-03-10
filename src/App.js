import "./Styles/App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [navClass, setNavClass] = useState("a");
  const viewSection = (directory) => {
    window.location.replace(`/#${directory}`);
    setNavClass("sticky");
  };

  return (
    <div className="App">
      <Landing viewSection={viewSection} />
      <Nav
        navClass={navClass}
        setNavClass={setNavClass}
        viewSection={viewSection}
      />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
