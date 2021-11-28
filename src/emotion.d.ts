import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      textPrimary: string;
      textSecondary: string;
      divider: string;
    };
    spacing: (n: number) => number;
  }
}
