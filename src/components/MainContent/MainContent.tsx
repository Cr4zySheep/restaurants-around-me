/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { css, jsx } from '@emotion/react';
import useRestaurants from 'hooks/useRestaurants';

import PlacesMap from './PlacesMap';
import TextField from './TextField';
import PlacesList from './PlacesList';

const halfStyle = css({
  width: '50%',
});

export default function MainContent(): EmotionJSX.Element {
  const { places, address } = useRestaurants();

  return (
    <React.Fragment>
      <TextField name='position' label='Your position' value={address || ''} />

      <div
        css={theme => ({
          display: 'flex',
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          paddingLeft: theme.spacing(1),
          flexGrow: 1,
          overflow: 'hidden',
        })}
      >
        <div css={[halfStyle, { minHeight: 0 }]}>
          {places && <PlacesList places={places} />}
        </div>

        <div css={[halfStyle, theme => ({ marginLeft: theme.spacing(2) })]}>
          <PlacesMap />
        </div>
      </div>
    </React.Fragment>
  );
}
