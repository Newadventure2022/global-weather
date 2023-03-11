import React from "react";
import Search from "./Search.js";

import Temperature from "./Temperature.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="Container">
          <div className="headerBorder">
            <h1>Weather</h1>
            <Search />
          </div>
          <div className="cities">
            <h2 className="current-city">
              <span id="current-city"> Spain </span>
            </h2>
          </div>

          <Temperature />
          <div className="nextSix">
            <p className="current-city">Next 6 Day Weather Forecast</p>
          </div>
          <Forecast />

          <Footer />
        </div>
      </div>
    </div>
  );
}
