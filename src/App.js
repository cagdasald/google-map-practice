import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import TappableMarkerMap from './pages/maps/TappableMarkerMap';
import CreateMarkerMap from './pages/maps/CreateMarkerMap';
import ObjectLitrealMap from './pages/maps/ObjectLitrealMap';
import TileMap from './pages/maps/TileMap';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import GettingCordsWithClickEvent from './pages/maps/GettingCordsWithClickEvent';
import MapWithDirections from './pages/maps/MapWithDirections';

function App() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCd7VzhABeme4cXeWwtv8bY2AWXKleRCbk"
      id='google-map-script'
    >
      <Grid container spacing={3} className="App">
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">This example creates a map with tappable markers displaying a
                secret message.</Typography>
              <TappableMarkerMap />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">This example creates a map that the user can click to create a
                marker at the clicked point.</Typography>
              <CreateMarkerMap />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">This example demonstrates using a LatLng object literal instead of a
                google.maps.LatLng object, to center the map and add a marker. LatLng object literals are a
                convenient way to add a LatLng coordinate and, in most cases, can be used in place of a
                google.maps.LatLng object.</Typography>
              <ObjectLitrealMap />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">This example creates a map that displays a window with the latitude,
                longitude, and world, pixel, and tile coordinates for Chicago, IL. It also shows how these
                values change as the zoom level is adjusted.</Typography>
              <TileMap />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">This example listens for the click event, gets the latitude and longitude
                coordinates of the click from google.maps.MapMouseEvent.latLng, and displays those coordinates in an
                info window.</Typography>
              <GettingCordsWithClickEvent />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">This example listens for the click event, gets the latitude and longitude
                coordinates of the click from google.maps.MapMouseEvent.latLng, and displays those coordinates in an
                info window.</Typography>
              <MapWithDirections />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </LoadScript>
  );
}

export default App;