import React from "react";
import Weather from "./Weather.js";

import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <div>
            <Weather defaultCity="Valencia" />{" "}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
