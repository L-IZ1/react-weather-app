import React from "react";

export default function WeatherForecast (){
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="ForecastDay">Thu Icon </div>
                    <div className="ForecastTemperature-max">19°</div>
                    <div className="ForecastTemperature-min">10°</div>
                </div>
            </div>
        </div>
    );
}