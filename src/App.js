import "./Styles/App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState, useRef } from "react";

function App() {
  const [navClass, setNavClass] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState("");

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const landingRef = useRef(null);

  const viewSection = (directory) => {
    window.location.replace(`/#${directory}`);
    setNavClass("sticky");
  };

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setNavClass("sticky");
  };

  const toggleModal = (appName) => {
    setModalActive(!modalActive);
    appName ? setModalData(appName) : setModalData("");
  };

  return (
    <div className="App">
      {modalActive === true && (
        <Modal toggleModal={toggleModal} name={modalData} />
      )}
      <Landing
        viewSection={viewSection}
        scrollSmoothHandler={scrollSmoothHandler}
        landingRef={landingRef}
        aboutRef={aboutRef}
      />
      <Nav
        navClass={navClass}
        setNavClass={setNavClass}
        viewSection={viewSection}
        scrollSmoothHandler={scrollSmoothHandler}
        landingRef={landingRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} toggleModal={toggleModal} />
      <Contact contactRef={contactRef} />
      <Footer
        viewSection={viewSection}
        scrollSmoothHandler={scrollSmoothHandler}
        landingRef={landingRef}
      />
    </div>
  );
}

export default App;
