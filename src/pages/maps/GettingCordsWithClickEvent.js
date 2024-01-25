import React, { useState } from 'react';
import { GoogleMap, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -25.363,
  lng: 131.044
};

function GettingCordsWithClickEventMap() {
  const [selected, setSelected] = useState(null);

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={e => {
          setSelected({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        }}
      >
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

export default React.memo(GettingCordsWithClickEventMap);