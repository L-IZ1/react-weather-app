import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
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
    <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="Type a city" 
          autoFocus="on"
          onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
    <WeatherInfo data={weather}/>
     </div>
     ); }
else{
  search();
  return "Hello";
}}