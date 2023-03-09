import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-date"></div>
        </div>
      </div>
    </div>
  );
}
