import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherObject, setWeatherObject] = useState({ ready: false });;
  const [city, setCity] = useState(props.defaultCity);
  
  function handleSubmit(event) {
  event.preventDefault();}

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
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
              <span className="searched-place">Paris</span>
            </li>
            <li className="date">Friday 10 a.m.
            </li>
          </ul>
            <div className="d-flex weather-temperature">
              <div className="float-left">
                  <span><strong className="temp-number">25</strong></span>
                  <span className="celsius">°C</span>
              </div>
            </div>
                  <ul>
                    <li className="weather-description-live">
                     Cloudy
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
                    Humidity:80%<br />
                    Wind:10km/h
                </p>
            </div> 
             </div>
</div>
</div>
</div> );
}else{
  return "Hello";
}

           
}