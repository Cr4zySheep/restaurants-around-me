import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'helpers';
import { RestaurantsProvider } from 'hooks/useRestaurants';
import OverrideCSS from 'components/OverrideCSS';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <OverrideCSS />

      <RestaurantsProvider>
        <App />
      </RestaurantsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
