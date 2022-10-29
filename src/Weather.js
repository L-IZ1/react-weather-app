import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const[temperature, setTemperature] =useSte ("");
  
  function handleSubmit(event) {
  event.preventDefault();}

  function updateCity(event) {
    alert("Hello");
  }

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
<div>
                 <div>
              {" "}
              <hr />{" "}
            </div>

               
          <p className="madebyme">
            <a
              className="link-github"
              href="https://github.com/L-IZ1/react-weather-app" target="_blank" rel="noopener noreferrer"
            >
              Open-source code
            </a>
            <a
              className="link-linkedin"
              href="https://www.linkedin.com/in/elisepetitjean/" target="_blank" rel="noopener noreferrer"
            >
              {" "}
              by Elise Petitjean <i className="fa-brands fa-linkedin"></i>
            </a>
          </p>
        </div>
        </div>
        </div>);
}