import React from "react";

export default function Search(props) {
  return (
    <div className="WeatherSearch">
      <div className="search-wrapper">
        <div className="weather-border">
          <div className="city-search">
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                id="city-search"
                placeholder="Search for a new city"
                autoComplete="off"
                className="form-control"
                onChange={props.handleCityChange}
                value={props.city}
              />
              <input type="submit" id="search-button" value="search" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
