'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { darkTheme, lightTheme } from '../../styles/globalTheme.css';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </NextThemeProvider>
  );
}