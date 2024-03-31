import React from 'react';

function WeatherDisplay({ forecast }) {
  return (
    <div>
      <h2>Weather Forecast</h2>
      <ul>
        {forecast.map((day, index) => (
          <li key={index}>
            {day.date}: {day.weather}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDisplay;
