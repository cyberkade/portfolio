import "./Styles/App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [navClass, setNavClass] = useState("a");
  const viewAbout = () => {
    window.location.replace("/#about");
    setNavClass("sticky");
  };

  return (
    <div className="App">
      <Landing viewAbout={viewAbout} />
      <Nav
        navClass={navClass}
        setNavClass={setNavClass}
        viewAbout={viewAbout}
      />
      <About />
      <Projects />
    </div>
  );
}

export default App;
