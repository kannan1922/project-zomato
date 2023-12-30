import React, { useEffect, useState } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

const LocationComponent: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [locationName, setLocationName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Fetch location name using reverse geocoding (Google Maps Geocoding API)
            try {
              const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDsklSLoF3zhP6Dif-NGQEQwiBkvwEwD74`
              );

              if (!response.ok) {
                throw new Error('Error fetching location name');
              }

              const data = await response.json();
              const firstResult = data.results[0];

              if (firstResult) {
                setLocationName(firstResult.formatted_address);
              } else {
                setError('Location name not found');
              }
            } catch (error:any) {
              setError(`Error fetching location name: ${error.message}`);
            }

            setLocation({ latitude, longitude });
          },
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              setError('User denied Geolocation');
            } else {
              setError(`Error getting location: ${error.message}`);
            }
          }
        );
      } else {
        setError('Geolocation is not supported by your browser');
      }
    };

    getLocation();
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <div>
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Location Name: {locationName || 'Fetching location name...'}</p>
        </div>
      ) : (
        <p>{error || 'Fetching location...'}</p>
      )}
    </div>
  );
};

export default LocationComponent;
