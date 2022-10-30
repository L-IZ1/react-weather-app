import React from "react";
import Weather from "./Weather.js";


export default function App() {
  return (
      <div className="App">
        <div className="container">
        <Weather defaultCity="Paris"/>
              <div>{" "}
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
  );
}