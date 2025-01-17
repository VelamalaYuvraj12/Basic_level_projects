import React, { useState } from 'react';

function WeatherForm({ onSubmit }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Get Forecast</button>
    </form>
  );
}

export default WeatherForm;
