'use client';
import { blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';

const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[900],
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SessionProvider>
  );
}
