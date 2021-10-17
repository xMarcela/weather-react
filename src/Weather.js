import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [searched, setSearched] = useState(false);

    function displayWeather(response) {
        setSearched(true);
        setWeather({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "3a94f3778290bfeee61278505dbbe51d";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(displayWeather);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <div className="weathercontainer">
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Enter a city.." onChange={updateCity} />
                <input type="submit" value="Search" />
            </form>
        </div>

    );

    if (searched) {
        return (
            <div className="weathercontainer">
                {form}
                <h1>{city}</h1>
                <ul>
                    <li>Temperature: {Math.round(weather.temperature)}°C </li>
                    <li>Description: {weather.description} </li>
                    <li>Humidity: {weather.humidity}% </li>
                    <li>Wind: {weather.wind} k/m </li>
                    <li><img src={weather.icon} alt={weather.description} /></li>
                </ul>
            </div>
        );
    } else {
        return form;
    }
}