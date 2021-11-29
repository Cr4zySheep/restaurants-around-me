/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

export default function Footer(): EmotionJSX.Element {
  return (
    <footer
      css={theme => ({
        color: theme.colors.textSecondary,
        textAlign: 'center',
        a: { color: theme.colors.textSecondary },
        'a:hover': { color: theme.colors.secondary },
      })}
    >
      Icons made by{' '}
      <a href='https://www.freepik.com' title='Freepik'>
        Freepik
      </a>{' '}
      from{' '}
      <a href='https://www.flaticon.com/' title='Flaticon'>
        www.flaticon.com
      </a>
    </footer>
  );
}
