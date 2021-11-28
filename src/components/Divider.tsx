/** @jsxRuntime classic */
/** @jsx jsx */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { CSSObject, Interpolation, jsx, Theme } from '@emotion/react';

export default function Divider({
  styles,
}: {
  styles?: Interpolation<Theme> | CSSObject;
}): EmotionJSX.Element {
  return (
    <hr
      css={[
        theme => ({
          color: theme.colors.divider,
          width: '50%',
          margin: `${theme.spacing(2)}px auto`,
        }),
        styles,
      ]}
    />
  );
}

Divider.defaultProps = { styles: {} };
