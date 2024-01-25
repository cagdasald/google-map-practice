import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '660px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

function ObjectLitrealMap() {
  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setSelected(true);
  };

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >
        <Marker position={center} onClick={handleClick} />
        {selected && (
          <InfoWindow
            position={center}
            onCloseClick={() => setSelected(false)}
          >
            <div>
              <p>Marker Location: {center.lat}, {center.lng}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
  )
}

export default React.memo(ObjectLitrealMap);