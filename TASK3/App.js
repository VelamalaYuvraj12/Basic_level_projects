import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import LocationDetector from './LocationDetector';

function App() {
  const [forecast, setForecast] = useState([]);

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=YOUR_API_KEY&units=metric`
      );
      const weatherData = response.data.list.slice(0, 5).map((item) => ({
        date: item.dt_txt,
        weather: item.weather[0].description,
      }));
      setForecast(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleDetectLocation = (latitude, longitude) => {
    fetchWeatherData(`${latitude},${longitude}`);
  };

  return (
    <div>
      <WeatherForm onSubmit={fetchWeatherData} />
      <LocationDetector onDetectLocation={handleDetectLocation} />
      <WeatherDisplay forecast={forecast} />
    </div>
  );
}

export default App;
