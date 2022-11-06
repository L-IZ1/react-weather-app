import React from "react";
import NiceDate from "./NiceDate";

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
<div className="container">
  <div className="live-weather">
    <div className="row">
      <div className="col-md-7 live-city">
          <ul>
            <li>
              <span className="searched-place">{props.data.city}</span>
            </li>
            <li className="date"><NiceDate date={props.data.date}/>
            </li>
          </ul>
                <div className="d-flex weather-temperature">
                <div className="float-left">
                  <span>{props.data.icon}</span>
                  <span><strong className="temp-number">{props.data.temperature}</strong></span>
                  <span className="celsius">°C</span>
                </div>
                </div>
                  <ul>
                    <li className="weather-description-live">
                     {props.data.description}
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
                    <span>{props.data.humidity}</span><br />
                    <span>{props.data.wind}</span>
                </p>
            </div> 
     </div>
     </div>
     </div>
     </div>
);
}