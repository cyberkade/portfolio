import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Landing />
      <Nav />
      <About />
    </div>
  );
}

export default App;
