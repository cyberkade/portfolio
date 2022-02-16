import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Landing />
      <Nav />
    </div>
  );
}

export default App;
