import React from "react";
import Navbar from "./components/Navbar";
import Results from "./components/Results";

import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Results />
      <footer>
        <div className="footer-copyright">
          <div className="container">
            © 2022 Copyright reserved to KAREEM FOUAD
            <a
              className="right"
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/kareemwezza"
            >
              Know More
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
