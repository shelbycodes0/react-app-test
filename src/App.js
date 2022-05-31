import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let [city, displayCity] = useState(null);
  let [message, setMessage] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("04n");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`Current Weather: ${city}`);
    function showWeather(response) {
      setTemperature(`Temperature: ${Math.round(response.data.main.temp)}°C`);
      setDescription(`Conditions: ${response.data.weather[0].main}`);
      setHumidity(`Humidity: ${response.data.main.humidity}%`);
      setWind(`Windspeed: ${response.data.wind.speed} km/h`);
      setIcon(response.data.weather[0].icon);
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35fef657ca97af5d0a6b09b7b5078d4d&units=metric`;
    axios.get(url).then(showWeather);
  }
  function showCity(event) {
    displayCity(event.target.value);
  }

  let image = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a City..."
          onChange={showCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
      <p>{temperature}</p>
      <p>{description}</p>
      <p>{humidity}</p>
      <p>{wind}</p>
      <p>
        <img src={image} alt="weather icon" />
      </p>
    </div>
  );
}

export default App;
