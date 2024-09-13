import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 18.5912,
  lng: 73.7380,
};

const Map = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
      <h1
        className="text-center font-bold mb-8"
        style={{
          color: "#06a34e",
          fontSize: "30px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Location Advantage
      </h1>

      <LoadScript googleMapsApiKey={API_KEY}>
        <div className="relative w-full max-w-4xl h-[300px] sm:h-[400px] lg:h-[500px]">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
};

export default Map;
