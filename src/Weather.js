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
      <div className="weather">
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
        <div className="cities">
          <h2 id="city">{weatherData.city}</h2>
        </div>
        <div className="date-heading">
          <FormattedDate date={weatherData.date} />
        </div>
        <div className="temp-wrapper">
          <div className="temp-number">
            <img src={weatherData.iconUrl} id="icon" align="left" alt="" />
            <Temperature temp={weatherData.temperature} />
          </div>
          <div className="temperature">
            <span className="Weather">Weather: {weatherData.description}</span>
            <span className="Humidity">Humidity: {weatherData.humidity}%</span>
            <span className="Feels-like">
              Feels Like: {weatherData.feelsLike}°C
            </span>
            <span className="Wind">Wind: {weatherData.wind} km/h</span>
          </div>
        </div>
        <div className="nextSix">Next 6 Day Weather Forecast</div>
        <Forecast coordinates={weatherData.coordinates} apiKey={apiKey} />
        <div className="center-me"></div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
