import React from "react";
import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultWord="flight" />
      </div>
      <footer className="mt-3">
        <p>
          Author: Jessica Chen | Open Source:{" "}
          <a
            href="https://github.com/jess-n-chen/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Github Link
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
