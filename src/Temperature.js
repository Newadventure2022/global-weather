import React from "react";

import "./Temperature.css";

export default function temperature() {
  return (
    <div className="temp-main">
      <h3 className="date-heading">
        Last Updated: <span id="date">Wednesday</span>
      </h3>
      <p className="temperature">
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
          alt="rainy"
          id="icon"
        />
        <span className="temp-number" id="temperature">
          10
        </span>
        <span className="units">
          <a href="/#" id="celsius-link" className="active">
            °C
          </a>
          |
          <a href="/#" id="fahrenheit-link">
            °F
          </a>
        </span>
        <span className="verticalLine">
          Weather:{" "}
          <span className="weather" id="weather">
            Clear
          </span>
          <br />
          Humidity:{" "}
          <span className="humidity" id="humidity">
            70
          </span>
          %
          <br />
          Wind:{" "}
          <span className="wind" id="wind">
            2
          </span>
          km/h
        </span>
      </p>
      <br />
    </div>
  );
}
