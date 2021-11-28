/** @jsxRuntime classic */
/** @jsx jsx */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { jsx } from '@emotion/react';

import img from './restricted-area.png';

export default function ErrorContent(): EmotionJSX.Element {
  return (
    <div
      css={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: -125,
      }}
    >
      <img
        css={theme => ({ width: 150, marginBottom: theme.spacing(2) })}
        src={img}
        alt=''
      />
      <p
        css={theme => ({
          color: theme.colors.textSecondary,
        })}
      >
        Access to your location was needed to work properly. You need to refresh
        the page.
      </p>
    </div>
  );
}
