import React from "react";
import Weather from "./Weather.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"


export default function App() {
  return (
      <div className="App">
        <div className="container">
        <Weather defaultCity="Paris"/>
               </div>
          <p className="madebyme">
             
              
            <a
              className="link-github"
              href="https://github.com/L-IZ1/react-weather-app" target="_blank" rel="noopener noreferrer"
            >
              Open-source code on GitHub
            </a>
             <span class="ml-1"></span> <i className="fa fa-github" aria-hidden="true"></i>
            <a
              className="link-linkedin"
              href="https://www.linkedin.com/in/elisepetitjean/" target="_blank" rel="noopener noreferrer"
            >
              {" "}
              by Elise Petitjean 
              
            </a>
            <span class="ml-1"></span> <FontAwesomeIcon icon={faLinkedin} />
           
            
          </p>
        
        </div>
  );
}