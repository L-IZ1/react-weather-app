import React, {useState} from "react";

export default function WeatherTemperatureConversion (props){
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit (event){
        event.preventDefault();
        setUnit ("fahrenheit");
    }

    function showCelsius (event){
        event.preventDefault();
        setUnit ("celsius");
    }

    if (unit === "celsius"){
    return(
<div>
<span className="temp-number">{props.celsius}</span>
<span className="units">°C|{""}<a className="colorPrimary" href="/" onClick={showFahrenheit}>°F</a></span>
</div>
);
}else{
    let fahrenheit= Math.round(props.celsius *9)/5+32;
    return (
<div>
<span className="temp-number">{fahrenheit}</span>
<span className="units"><a className="colorPrimary" href="/" onClick={showCelsius}>°C</a> {""} |°F</span>
 </div>
 );
}
}