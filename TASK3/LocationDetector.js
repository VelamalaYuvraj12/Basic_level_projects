import React from 'react';

function LocationDetector({ onDetectLocation }) {
  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        onDetectLocation(latitude, longitude);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={handleDetectLocation}>Detect Location</button>
    </div>
  );
}

export default LocationDetector;
