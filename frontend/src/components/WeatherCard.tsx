type WeatherProps = {
    currentWeather: { // I created the currentWeather object to pass all the props as one object
        name: string;
        main: {
            temp: number;
            feels_like: number;
            humidity: number;
        };
        weather:[{
            description: string;
            icon: string;
        }]
    };
};

const WeatherCard = ({ currentWeather }: WeatherProps) => (
    <div>
        <h3>{currentWeather.name}</h3>
        <p>Temperature: {currentWeather.main.temp}°F</p>
        <p>Feels Like: {currentWeather.main.feels_like}°F</p>
        <p>Humidity: {currentWeather.main.humidity}%</p>
        <p>Conditions: {currentWeather.weather[0].description}</p>
    </div>
);

export default WeatherCard;
