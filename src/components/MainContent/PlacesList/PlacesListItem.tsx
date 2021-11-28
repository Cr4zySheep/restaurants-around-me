/** @jsxRuntime classic */
/** @jsx jsx */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { css, jsx, useTheme } from '@emotion/react';
import useRestaurants, { Place } from 'hooks/useRestaurants';

export default function PlacesListItem({
  place,
}: {
  place: Place;
}): EmotionJSX.Element {
  const { setSelectedPlace } = useRestaurants();
  const theme = useTheme();

  const paragraphStyle = css({
    color: theme.colors.textSecondary,
    fontSize: 12,
    b: {
      color: theme.colors.textSecondary,
    },
  });

  const overlineStyle = [
    paragraphStyle,
    {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: theme.spacing(0.5),
      lineHeight: 1.2,
    },
  ];

  const subtitleStyle = [
    paragraphStyle,
    {
      fontSize: 14,
      marginBottom: theme.spacing(0.5),
      lineHeight: 1.2,
    },
  ];

  const titleStyle = { fontSize: 16, fontWeight: 'normal' };

  return (
    <li
      css={{
        borderBottom: `1px solid ${theme.colors.divider}`,
      }}
    >
      <button
        type='button'
        onClick={() => {
          setSelectedPlace(place);
        }}
        css={{
          padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
          backgroundColor: 'transparent',
          border: '1px solid transparent',
          width: '100%',
          textAlign: 'left',
          ':hover': {
            background: 'rgb(240, 240, 240)',
            cursor: 'pointer',
          },
        }}
      >
        {place.openingHours && (
          <p css={overlineStyle}>{place.openingHours[0].text.join(', ')}</p>
        )}

        <h2 css={titleStyle}>
          {place.title} ({place.distance / 1000}km
          {place.openingHours &&
            (place.openingHours[0].isOpen ? ', open' : ', closed')}
          )
        </h2>

        <p css={subtitleStyle}>{place.address.label}</p>

        <p css={paragraphStyle}>
          <b>Categories:</b>{' '}
          {place.categories.map(item => item.name).join(', ')}
        </p>

        {place.foodTypes && (
          <p css={paragraphStyle}>
            <b>Food types:</b>{' '}
            {place.foodTypes.map(item => item.name).join(', ')}
          </p>
        )}
      </button>
    </li>
  );
}
