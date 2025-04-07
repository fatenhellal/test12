// src/MapboxMap.js
import React from 'react';
import { Map, Marker } from 'pigeon-maps';  // Import Map and Marker from pigeon-maps

const PigeonMap = ({ latitude, longitude }) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Map height={600} defaultCenter={[latitude, longitude]} defaultZoom={12}>
        {/* Add a Marker at the given position */}
        <Marker anchor={[latitude, longitude]} payload={"You are here"} />
      </Map>
    </div>
  );
};

export default PigeonMap;
