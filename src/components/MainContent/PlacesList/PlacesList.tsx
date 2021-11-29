/** @jsxRuntime classic */
/** @jsx jsx */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { jsx } from '@emotion/react';

import { Place } from 'helpers/types';
import PlacesListItem from './PlacesListItem';

export default function PlacesList({
  places,
}: {
  places: Place[];
}): EmotionJSX.Element {
  return (
    <ul
      css={theme => ({
        borderRadius: theme.spacing(2),
        border: `1px solid ${theme.colors.divider}`,
        padding: 0,
        overflow: 'auto',
        li: {
          listStyle: 'none',
        },
        marginRight: theme.spacing(2),
        boxShadow: `0px 0px 10px rgb(200, 200, 200)`,
        height: '100%',
      })}
    >
      {places.map(place => (
        <PlacesListItem key={place.id} place={place} />
      ))}
    </ul>
  );
}
