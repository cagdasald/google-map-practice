import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -25.363882,
  lng: 131.044922
};

const bounds = {
  north: -25.363882,
  south: -31.203405,
  east: 131.044922,
  west: 125.244141
};

const secretMessages = ["This", "is", "the", "secret", "message"];

function TappableMarkerMap() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const markers = secretMessages.map((message, index) => {
    const latSpan = bounds.north - bounds.south;
    const lngSpan = bounds.east - bounds.west;
    return {
      id: index,
      position: {
        lat: bounds.south + latSpan * Math.random(),
        lng: bounds.west + lngSpan * Math.random()
      },
      message: message
    };
  });

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>{selectedMarker.message}</div>
          </InfoWindow>
        )}
      </GoogleMap>
  )
}

export default React.memo(TappableMarkerMap);