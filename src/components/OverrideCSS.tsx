/** @jsxRuntime classic */
/** @jsx jsx */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Global, jsx } from '@emotion/react';

export default (): EmotionJSX.Element => (
  <Global styles={theme => ({ '*': { color: theme.colors.textPrimary } })} />
);
