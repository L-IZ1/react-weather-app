import React from "react";
import NiceDate from "./NiceDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperatureConversion from "./WeatherTemperatureConversion";

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
  <div className="live-weather">
    <div className="row">
      <div className="col-md-7 live-city mt-5">
          <ul>
            <li>
              <span className="searched-place">{props.data.city}</span>
            </li>
            <li className="date"><NiceDate date={props.data.date}/>
            </li>
            </ul>
                <div className="d-flex weather-temperature">
                <WeatherIcon code={props.data.icon} alt={props.data.description}/>
                <div className="float-left">
                  <WeatherTemperatureConversion celsius={props.data.temperature}/>
                </div>
                </div>
                <ul>
                    <li className="weather-description-live">
                     {props.data.description}
                    </li>
                  </ul>
                </div>
                  
          <div className="col-md-4 weather-live mt-5">
                <p className="card-text-weather-conditions">
                    <i className="fa-solid fa-arrow-up max-current-temp"></i>{" "}
                    Max:Info API
                    <span id="max-temp"></span>°C
                    <br />
                    <i className="fa-solid fa-arrow-down min-current-temp"></i>{" "}
                    Min: Info API
                    <span id="min-temp"></span>°C
                    <br />
                    <span>Humidity: {props.data.humidity} %</span><br />
                    <span>Wind speed: {props.data.wind} km/h</span>
                </p>
            </div> 
            </div>
     </div>
     </div>
    
);
}