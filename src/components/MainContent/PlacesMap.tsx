import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import useRestaurants from 'hooks/useRestaurants';

function DummyComponent(): null {
  const map = useMap();
  const { selectedPlace } = useRestaurants();

  useEffect(() => {
    if (!selectedPlace) return;

    map.flyTo([selectedPlace.position.lat, selectedPlace.position.lng], 17);
  }, [selectedPlace, map]);

  return null;
}

export default function PlacesMap(): React.ReactElement | null {
  const { position, places } = useRestaurants();

  if (!position || !places) return null;

  return (
    <MapContainer
      center={[position.lat, position.lng]}
      zoom={13}
      whenCreated={map => {
        // Needed, otherwise there is a huge gray square at the bottom
        map.invalidateSize();
      }}
      style={{
        height: '100%',
        borderRadius: `4px 16px 16px 4px`,
      }}
    >
      <DummyComponent />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {places.map(place => (
        <Marker
          key={place.id}
          position={[place.position.lat, place.position.lng]}
        >
          <Popup>
            {place.title}
            <br />
            {place.address.label}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
