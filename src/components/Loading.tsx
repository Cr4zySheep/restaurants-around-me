/** @jsxRuntime classic */
/** @jsx jsx */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { jsx } from '@emotion/react';

import Loader from 'components/Loader';

export default function Loading(): EmotionJSX.Element {
  return (
    <div
      css={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Loader />
      <p
        css={theme => ({
          color: theme.colors.textSecondary,
          fontStyle: 'italic',
        })}
      >
        Waiting for your permission
      </p>
    </div>
  );
}
