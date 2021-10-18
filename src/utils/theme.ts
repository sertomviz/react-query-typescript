import { createTheme, PaletteOptions, responsiveFontSizes, Theme } from '@mui/material';

export const getAppTheme = (): Theme => {
  let theme = createTheme({
    palette: 'light' as PaletteOptions,
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
