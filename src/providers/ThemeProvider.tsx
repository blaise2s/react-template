import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  ThemeOptions,
} from '@mui/material';
import { ReactNode } from 'react';

const themeOptions: ThemeOptions = {};
const theme = createTheme(themeOptions);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
