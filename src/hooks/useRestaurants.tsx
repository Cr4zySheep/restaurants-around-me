import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  Dispatch,
} from 'react';
import axios from 'axios';

import usePosition, { Position, Status } from './usePosition';

interface Category {
  id: string;
  name: string;
}

export interface Place {
  title: string;
  id: string;
  position: Position;
  categories: Category[];
  distance: number;
  address: {
    label: string;
  };
  foodTypes?: Array<{ id: string; name: string }>;
  openingHours?: Array<{ isOpen: boolean; text: string[] }>;
}

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

const HERE_API_KEY = 'XmoGq1LlLyTEX641rVdG6qfIWaaIlQjAWVKJIhSSdKw'; // eslint-disable-line

export function RestaurantsProvider({
  children,
}: {
  children: EmotionJSX.Element;
}): EmotionJSX.Element {
  const { position, status } = usePosition();
  const [address, setAddress] = useState();
  const [places, setPlaces] = useState<Place[]>();
  const [selectedPlace, setSelectedPlace] = useState<Place>();

  useEffect(() => {
    if (!position) return;

    axios
      .get('https://revgeocode.search.hereapi.com/v1/revgeocode', {
        params: {
          apiKey: HERE_API_KEY,
          at: `${position.lat},${position.lng}`,
        },
      })
      .then(res => {
        setAddress(res.data.items[0].title);
      })
      .catch(console.log);

    axios
      .get('https://discover.search.hereapi.com/v1/discover', {
        params: {
          apiKey: HERE_API_KEY,
          at: `${position.lat},${position.lng}`,
          q: 'restaurants',
          limit: 10,
          lang: 'en-US',
        },
      })
      .then(res => {
        setPlaces(res.data.items);
      })
      .catch(console.log);
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
