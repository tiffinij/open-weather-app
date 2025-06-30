import { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";


// const localBackendUrl = "http://localhost:3000";
// const prodBackendUrl = "https://open-weather-app-dev.onrender.com";

const WeatherForecast = () => {
    const [weather, setWeather] = useState<any>(null);
    const [zip, setZip] = useState("");

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://open-weather-app-prod.onrender.com/weather/${zip}`
            );
            setWeather(response.data);
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter ZIP Code"
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && <WeatherCard currentWeather={weather} />}
        </div>
    );
};

export default WeatherForecast;
