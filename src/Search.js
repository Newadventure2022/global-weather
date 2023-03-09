import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div>
      <h2>
        {" "}
        <div className="Search">
          <form id="search-form">
            <input
              type="search"
              placeholder="Enter City"
              autoFocus="on"
              autoComplete="off"
              id="search-input-result"
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="current-location-button">
          {" "}
          <button id="current-location-button">Current</button>
        </div>
      </h2>
    </div>
  );
}
