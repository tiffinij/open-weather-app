type WeatherProps = {
  currentWeather?: {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: [
      {
        description: string;
        icon: string;
      }
    ];
  };
};

const WeatherCard = ({ currentWeather }: WeatherProps) => {
// If currentWeather is not provided, return a loading state
  if (!currentWeather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h3>{currentWeather.name}</h3>
        <img
        src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
        alt={currentWeather.weather[0].description}
        /> 
        <p>Temperature: {currentWeather.main.temp}°F</p>
        <p>Feels Like: {currentWeather.main.feels_like}°F</p>
        <p>Humidity: {currentWeather.main.humidity}%</p>
        <p>Conditions: {currentWeather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
