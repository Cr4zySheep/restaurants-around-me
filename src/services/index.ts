import axios from 'axios';

import { Position, Place } from 'helpers/types';

const HERE_API_KEY = 'XmoGq1LlLyTEX641rVdG6qfIWaaIlQjAWVKJIhSSdKw';

export function reverseGeocode(position: Position): Promise<{ title: string }> {
  return axios
    .get('https://revgeocode.search.hereapi.com/v1/revgeocode', {
      params: {
        apiKey: HERE_API_KEY,
        at: `${position.lat},${position.lng}`,
      },
    })
    .then(res => res.data.items[0]);
}

export function discoverNearbyRestaurants(
  position: Position
): Promise<Place[]> {
  return axios
    .get('https://discover.search.hereapi.com/v1/discover', {
      params: {
        apiKey: HERE_API_KEY,
        at: `${position.lat},${position.lng}`,
        q: 'restaurants',
        limit: 10,
        lang: 'en-US',
      },
    })
    .then(res => res.data.items);
}
