import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum);
return`${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum);
return`${temperature}°`;
    }

    function day(){
        let date=new Date(props.data.time*1000)
        let day= date.getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    return(
        <div><div>{day()}</div>
        <WeatherIcon code={props.data.condition.icon}  alt={props.data.description} />
        <div className="TemperaturesForecast"><span >{maxTemperature()}|</span >
        <span className="ForecastMinTemp">{minTemperature()}</span></div>
        </div>
    );
}

