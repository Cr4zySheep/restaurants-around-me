import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  Dispatch,
} from 'react';

import { discoverNearbyRestaurants, reverseGeocode } from 'services';
import { Status, Position, Place } from 'helpers/types';
import usePosition from './usePosition';

interface RestaurantsContext {
  places: Place[] | undefined;
  address: string | undefined;
  status: Status;
  position: Position | undefined;
  selectedPlace: Place | undefined;
  setSelectedPlace: Dispatch<Place>;
}

const restaurantsContext = createContext<RestaurantsContext | undefined>(
  undefined
);

export default function useRestaurants(): RestaurantsContext {
  const context = useContext(restaurantsContext);

  if (!context)
    throw new Error(
      "'useRestaurants' should be used inside a RestaurantsProvder."
    );

  return context;
}

export function RestaurantsProvider({
  children,
}: {
  children: EmotionJSX.Element;
}): EmotionJSX.Element {
  const { position, status } = usePosition();
  const [address, setAddress] = useState<string>();
  const [places, setPlaces] = useState<Place[]>();
  const [selectedPlace, setSelectedPlace] = useState<Place>();

  useEffect(() => {
    if (!position) return;

    reverseGeocode(position)
      .then(data => setAddress(data.title))
      .catch(console.log);

    discoverNearbyRestaurants(position).then(setPlaces).catch(console.log);
  }, [position]);

  return (
    <restaurantsContext.Provider
      value={useMemo(
        () => ({
          places,
          status,
          address,
          position,
          selectedPlace,
          setSelectedPlace,
        }),
        [places, status, address, position, selectedPlace, setSelectedPlace]
      )}
    >
      {children}
    </restaurantsContext.Provider>
  );
}
