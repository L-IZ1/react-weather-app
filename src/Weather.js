import React, { useState } from "react";
import axios from "axios";
import NiceDate from "./NiceDate";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponseData (response) {
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time *1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });}
  
  function handleSubmit(event) {
  event.preventDefault();
search();
}


  function updateCity(event) {
    setCity(event.target.value);
  }

function search() {
    
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=41ee92b1c86o6aate6aaf3f706eca04d&units=metric`;
    axios.get(apiUrl).then(handleResponseData);
  }

  if (weather.ready) {
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="Type a city" 
          autoFocus="on"
          onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
     
<div className="container">
  <div className="live-weather">
    <div className="row">
      <div className="col-md-7 live-city">
          <ul>
            <li>
              <span className="searched-place">{weather.city}</span>
            </li>
            <li className="date"><NiceDate date={weather.date}/>
            </li>
          </ul>
            <div className="d-flex weather-temperature">
              <div className="float-left">
                  <span><strong className="temp-number">{weather.temperature}</strong></span>
                  <span className="celsius">°C</span>
              </div>
            </div>
                  <ul>
                    <li className="weather-description-live">
                     {weather.description}
                    </li>
                  </ul>
        </div>
   
          <div className="col-md-4 weather-live">
                <p className="card-text-weather-conditions">
                    <i className="fa-solid fa-arrow-up max-current-temp"></i>{" "}
                    Max:
                    <span id="max-temp"></span>°C
                    <br />
                    <i className="fa-solid fa-arrow-down min-current-temp"></i>{" "}
                    Min:
                    <span id="min-temp"></span>°C
                    <br />
                    <span>{weather.humidity}</span><br />
                    <span>{weather.wind}</span>
                </p>
            </div> 
             </div>
</div>
</div>
</div> );
}else{
  search();
  return "Hello";
}}