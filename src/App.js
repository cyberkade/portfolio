import "./Styles/App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [navClass, setNavClass] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState("");

  const viewSection = (directory) => {
    window.location.replace(`/#${directory}`);
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
      <Landing viewSection={viewSection} />
      <Nav
        navClass={navClass}
        setNavClass={setNavClass}
        viewSection={viewSection}
      />
      <About />
      <Projects toggleModal={toggleModal} />
      <Contact />
      <Footer viewSection={viewSection} />
    </div>
  );
}

export default App;
