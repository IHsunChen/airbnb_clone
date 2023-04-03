import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function MapBox({ searchResults }) {
  // Transform the search result into the
  // { latitude: 51.5103, longitude: 7.49347 } object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  

  const [viewport, serViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState({})
  console.log(selectedLocation)
  return (
    <Map
      mapStyle="mapbox://styles/ihsunchen/clg0cpsp5001601lnxognl2q5/draft"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={viewport}
      onViewportChange={(nextViewport) => serViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <div className="bg-white flex items-center space-x-1 px-2 rounded-lg animate-bounce">
              <span className="cursor-pointer text-md" onClick={() => setSelectedLocation(result)}>🏠</span>
              {/* <p className="text-lg">{result.price}</p> */}
            </div>
          </Marker>
          {/* The popup */}
          
          {selectedLocation.long == result.long && (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.lat}
              longitude={result.long}
              className="text-md font-semibold"
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </Map>
  );
}

export default MapBox;
