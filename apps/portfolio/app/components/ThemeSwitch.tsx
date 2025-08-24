'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Theme } from '../constants/theme';
import Sun from './icons/theme/Sun';
import Moon from './icons/theme/Moon';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onChangeTheme = () => {
    const currentTheme = theme || Theme.light;
    setTheme(currentTheme === Theme.light ? Theme.dark : Theme.light);
  };

  if (!mounted) {
    return <button><Moon /></button>;
  }

  return (
    <button onClick={onChangeTheme}>
      {theme === Theme.light ? <Moon /> : <Sun />}
    </button>
  );
}