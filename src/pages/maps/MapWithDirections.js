import React, { useState, useCallback } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -33.871,
  lng: 151.197
};

function MapWithDirections() {
  const [selected, setSelected] = useState(null);
  const [response, setResponse] = useState(null);
  const directionsCallback = useCallback((res) => {
    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res);
      } else {
        console.log('response: ', res);
      }
    }
  }, []);

  const directionsServiceOptions = {
    origin: center,
    destination: selected,
    travelMode: 'WALKING'
  };

  const directionsRendererOptions = {
    directions: response
  };

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={e => {
          setSelected({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        }}
      >
        {selected && (
          <DirectionsService
            options={directionsServiceOptions}
            callback={directionsCallback}
          />
        )}
        {response && (
          <DirectionsRenderer
            options={directionsRendererOptions}
          />
        )}
        {selected ? (
          <InfoWindow
            position={selected}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h4>Selected Location</h4>
              <p>Lat: {selected.lat}</p>
              <p>Lng: {selected.lng}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
  )
}

export default React.memo(MapWithDirections);