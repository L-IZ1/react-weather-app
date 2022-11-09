import React, { useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import ScaleLoader from "react-spinners/ScaleLoader";


export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
// let [loading, setLoading] = useState(true);
// let [color, setColor] = useState("#ffffff");

  function handleResponseData (response) {
    setWeather({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time *1000),
      description: response.data.condition.description,
      icon:response.data.condition.icon,
      wind: Math.round(response.data.wind.speed),
      feeling: Math.round(response.data.temperature.feels_like),
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
          <div className="row">
          <div className="col-7 mt-5">
          <input type="text" 
          placeholder="Enter a city..." 
          autoFocus="on"
          onChange={updateCity} />
          </div>
          <div className="col-4 mt-5">
          <input 
          type="submit" 
          value="Search"
          className="btn btn-primary w-100" />
          </div>
          </div>
        </form>
    <WeatherInfo data={weather}/>
    <WeatherForecast coordinates={weather.coordinates}/>
     </div>
     ); }
else{
  search();
  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Loading</button> */}
      {/* <input value={""} onChange={(input) => setColor(input.target.value)} /> */}
      <ScaleLoader
        color="#f7eaec"
        // loading={loading}
        size={1000}
        aria-label="ScaleLoader"
        data-testid="loader"
      />
    </div>
  );
}}