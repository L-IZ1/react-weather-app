import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast (props){
function handleResponseData (response){

}

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query="Paris"&key=41ee92b1c86o6aate6aaf3f706eca04d&units=metric`;
    axios.get(apiUrl).then(handleResponseData);

    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="ForecastDay">Thu Icon </div>
                    <WeatherIcon/>
                    <div className="ForecastTemperature-max">19°</div>
                    <div className="ForecastTemperature-min">10°</div>
                </div>
            </div>
        </div>
    );
}