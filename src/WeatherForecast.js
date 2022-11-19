import React,{useState, useEffect} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast (props){

let [loaded, setLoaded]=useState(false);
let [forecast, setForecast]=useState(null);

useEffect(() => {
setLoaded(false);
}, [props.coordinates]);

function handleResponseData (response){
setForecast(response.data.daily);
setLoaded(true);
}

if (loaded){
    
    return(
<div className="WeatherForecast">
            <div className="row">
                     {forecast.map(function (dailyForecast, index){
                        if (index <5){
                        return (<div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast}/>
                        </div>
                        )
                        }else{
                            return null;
                        }
                    })}
            </div>
        </div>
    );
} else{

let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=41ee92b1c86o6aate6aaf3f706eca04d`;

axios.get(apiUrl).then(handleResponseData);
return null;
}
}