import "../Styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-cont">
      <div className="info-div">
        <h1>
          Welcome, I'm <span className="name">Kade Griffith</span>.
          <br />
          I'm a Full Stack Developer.
        </h1>
        <button className="view-work-btn">
          View My Work
          {/* <svg
            className="arrow-svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg> */}
          <svg
            className="arrow-svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Landing;
