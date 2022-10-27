import React from "react";
import Weather from "./Weather.css";

export default function Weather() {
  
  function handleSubmit(event) {
  event.preventDefault();}

  function updateCity(event) {
    alert("Hello");
  }

  return (

    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Type a city" onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
     
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
                <div>
          <p className="madebyme">
            <a
              className="link-github"
              href="https://github.com/L-IZ1/my-weather-app"
            >
              Open-source code
            </a>
            <a
              className="link-linkedin"
              href="https://www.linkedin.com/in/elisepetitjean/"
            >
              {" "}
              by Elise Petitjean <i className="fa-brands fa-linkedin"></i>
            </a>
          </p>
        </div>
        </div>);
}