import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-date">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/067/836/original/Weather_Forecast_img.jpeg?1676508026"
              alt="weather-week"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
