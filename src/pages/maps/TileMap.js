import React, { useState, useCallback } from 'react';
import { GoogleMap, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 41.85,
  lng: -87.65
};

const TILE_SIZE = 256;

function project(latLng) {
  let siny = Math.sin((latLng.lat * Math.PI) / 180);
  siny = Math.min(Math.max(siny, -0.9999), 0.9999);
  return {
    x: TILE_SIZE * (0.5 + latLng.lng / 360),
    y: TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI))
  };
}

function TileMap() {
    const [zoom, setZoom] = useState(3);
    const [info, setInfo] = useState('');
    const [map, setMap] = useState(null);
  
    const onLoad = useCallback(function callback(map) {
      setMap(map)
    }, [])
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    const handleZoomChanged = useCallback(() => {
      if (map) {
        const newZoom = map.getZoom();
        setZoom(newZoom);
        const worldCoordinate = project(center);
        const scale = 1 << newZoom;
        const pixelCoordinate = {
          x: Math.floor(worldCoordinate.x * scale),
          y: Math.floor(worldCoordinate.y * scale)
        };
        const tileCoordinate = {
          x: Math.floor((worldCoordinate.x * scale) / TILE_SIZE),
          y: Math.floor((worldCoordinate.y * scale) / TILE_SIZE)
        };
        const newInfo = [
          "Chicago, IL",
          "LatLng: " + center.lat + ", " + center.lng,
          "Zoom level: " + newZoom,
          "World Coordinate: " + worldCoordinate.x + ", " + worldCoordinate.y,
          "Pixel Coordinate: " + pixelCoordinate.x + ", " + pixelCoordinate.y,
          "Tile Coordinate: " + tileCoordinate.x + ", " + tileCoordinate.y,
        ].join("<br>");
        setInfo(newInfo);
      }
    }, [map]);
  
    return (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onZoomChanged={handleZoomChanged}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <InfoWindow
            position={center}
          >
            <div dangerouslySetInnerHTML={{ __html: info }} />
          </InfoWindow>
        </GoogleMap>
    )
  }

export default React.memo(TileMap);