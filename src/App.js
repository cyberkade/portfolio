import "./Styles/App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  const viewAbout = () => {
    window.location.replace("/#about");
  };

  return (
    <div className="App">
      <Landing viewAbout={viewAbout} />
      <Nav viewAbout={viewAbout} />
      <About />
    </div>
  );
}

export default App;
