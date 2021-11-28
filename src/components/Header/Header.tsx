/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import logo from './logo.png';

export default function Header(): EmotionJSX.Element {
  return (
    <header
      css={theme => ({
        textAlign: 'center',
        img: { margin: 'auto', width: 200, marginBottom: theme.spacing(1) },
      })}
    >
      <img src={logo} alt='' />
      <h1 css={{ fontWeight: 'normal', fontSize: '2em' }}>
        Restaurants around you!
      </h1>
    </header>
  );
}
