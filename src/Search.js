import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [query, setQuery] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setQuery({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
  }
  function updateQuery(event) {
    console.log(event.target.value);
    setQuery(event.target.value);
  }
  return (
    <div>
      <h2>
        {" "}
        <div className="Search">
          <form onSubmit={handleSearch} id="search-form">
            <input
              type="search"
              placeholder="Enter a city"
              onChange={updateQuery}
              autoFocus="on"
              autoComplete="off"
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="current-location-button">
          {" "}
          <button id="current-location-button">Current</button>
        </div>
      </h2>
      <br />
      <span>{query}</span>
    </div>
  );
}
