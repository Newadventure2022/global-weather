import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./Weather.css";

const apiKey = "5293d8454b519c30f6f6331f38c85b4c";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  function handleResponse(response) {
    console.log("response", response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: response.data.wind.speed,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //Reset city state variable to an empty string for WeatherSearch's input
    setCity("");

    //Get city name value from event object
    const cityName = event.target[0].value;
    //Use city name value from event, as an url param for new request.
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="headerBorder">
          <h1>Weather</h1>

          <h3>
            {" "}
            <Search
              city={city}
              handleSubmit={handleSubmit}
              handleCityChange={handleCityChange}
            />
          </h3>
        </div>

        <div className="city-search">
          <h2 id="city">{weatherData.city}</h2>
          <Temperature temp={weatherData.temperature} />
          <div className="d-flex">
            <img src={weatherData.iconUrl} id="icon" align="left" alt="" />

            <ul>
              <li id="date">
                <FormattedDate date={weatherData.date} />
              </li>
              <li id="description" className="text-capitalize">
                {weatherData.description}
              </li>
            </ul>

            <div className="percentage-table">
              <div className="row even-space">
                <div className="col-2">Humidity</div>
                <div className="col-2">Feels Like</div>
                <div className="col-2">Wind Speed</div>
              </div>
              <div className="row even-space">
                <div className="col-2" id="humidity">
                  {weatherData.humidity}%
                </div>
                <div className="col-2" id="feels-like">
                  {weatherData.feelsLike}°F
                </div>
                <div className="col-2" id="wind">
                  {weatherData.wind} mph
                </div>
              </div>
            </div>
          </div>
          <Forecast coordinates={weatherData.coordinates} apiKey={apiKey} />
          <div className="center-me">
            <small>
              Open Source Repository{" "}
              <a
                href="https://github.com/Newadventure2022"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                here
              </a>{" "}
              made by{" "}
              <a
                href="https://www.linkedin.com/in/cecelia-c-975193ab/"
                className="linkedIn-link"
              >
                Celia Corona-Doran
              </a>{" "}
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
