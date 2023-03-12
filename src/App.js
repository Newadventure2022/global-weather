import React from "react";
import Weather from "./Weather.js";

import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <div className="Container">
          <h2 className="current-city">
            <Weather defaultCity="Valencia" />{" "}
          </h2>
          <div className="nextSix">
            <p className="current-city">Next 6 Day Weather Forecast</p>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
