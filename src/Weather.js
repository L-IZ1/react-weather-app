import React from "react";

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
      </div>);
}