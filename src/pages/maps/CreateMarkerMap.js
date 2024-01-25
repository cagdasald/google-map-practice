import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -25.363882,
  lng: 131.044922
};

function CreateMarkerMap() {
  const [markers, setMarkers] = useState([]);

  const handleClick = (event) => {
    setMarkers(current => [...current, {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }]);
  };

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        onClick={handleClick}
      >
        {markers.map((position, index) => 
          <Marker key={index} position={position} />
        )}
      </GoogleMap>
  )
}

export default React.memo(CreateMarkerMap);