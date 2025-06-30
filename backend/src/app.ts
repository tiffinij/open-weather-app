import axios from "axios";
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors());

// Define routes
app.get('/', (req, res) => {
    res.send('Weather API is running... <br> you can go to: <br> /status <br> /weather/[enter zipcode]');
});

app.get('/status', (req, res) => {
    console.log(req.method + ' ' + req.originalUrl + ' ' + 'Operational!') // for simple console logging
    res.send('Operational!');
});

app.get("/weather/:zipcode", async (req, res) => {
    try {
        const { zipcode } = req.params;
        const API_KEY = process.env.OPENWEATHER_API_KEY;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${API_KEY}`
        );
        console.log(req.method + ' ' + req.originalUrl + '  ' + '*** Weather data received! ***')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }

});


// Export the app
export default app;