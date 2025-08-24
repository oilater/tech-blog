import {
  globalStyle,
  createThemeContract,
  createGlobalTheme,
  createTheme,
} from '@vanilla-extract/css';
import { colorTokens } from './tokens/color.css';

export const global = createGlobalTheme(':root', {
  fontSize: {
    title: '3rem',
    subTitle: '1.3rem',
    topTitle: '2.5rem',
    topDescription: '1.2rem',
    contentTitle: '20px',
    contentDescription: '16px',
    navTitle: '17px',
  },
  fontWeight: {
    title: 'bold',
    subTitle: '500',
    topTitle: '700',
    topDescription: '500',
    contentTitle: '600',
    contentDescription: '400',
    navTitle: '500',
  },
  colors: colorTokens,
});

const themeColor = createThemeContract({
  colors: {
    mainBackground: null,
    contentBackground: null,
    cardBackground: null,
    quoteBackground: null,
    tagBackground: null,
    tagItemColor: null,
    titleFontColor: null,
    initialTitleFontColor: null,
    mainFontColor: null,
    subFontColor: null,
    cardTitleFontColor: null,
    cardDescriptionFontColor: null,
    borderColor: null,
    contentFontColor: null,
    highLightFontColor: null,
    postCodeColor: null,
    skeletonColor: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  colors: {
    titleFontColor: global.colors.grey800,
    initialTitleFontColor: global.colors.grey400,
    mainBackground: global.colors.white,
    contentBackground: global.colors.white,
    cardBackground: global.colors.grey100,
    quoteBackground: global.colors.grey50,
    tagBackground: global.colors.grey100,
    tagItemColor: global.colors.grey700,
    mainFontColor: global.colors.grey700,
    subFontColor: global.colors.grey500,
    cardTitleFontColor: global.colors.grey800,
    cardDescriptionFontColor: global.colors.grey600,
    borderColor: global.colors.grey300,
    contentFontColor: global.colors.grey600,
    highLightFontColor: global.colors.blue500,
    postCodeColor: '#E9ECEF',
    skeletonColor: global.colors.grey100,
  },
});

export const darkTheme = createTheme(themeColor, {
  colors: {
    titleFontColor: global.colors.white,
    initialTitleFontColor: global.colors.grey400,
    mainBackground: global.colors.black,
    contentBackground: '#191F28',
    cardBackground: global.colors.grey900,
    quoteBackground: global.colors.grey800,
    tagBackground: '#4E5968',
    tagItemColor: '#C3C3C6',
    mainFontColor: '#C3C3C6',
    subFontColor: '#C3C3C6',
    cardTitleFontColor: '#E4E4E5',
    cardDescriptionFontColor: '#9E9EA4',
    borderColor: global.colors.grey800,
    contentFontColor: '#7E7E87',
    highLightFontColor: global.colors.blue400,
    postCodeColor: '#24292E',
    skeletonColor: global.colors.grey800,
  },
});

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export const vars = { ...global, themeColor };

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('body', {
  backgroundColor: vars.themeColor.colors.mainBackground,
  fontFamily: '"Pretendard", -apple-system, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  transition: 'background-color 0.2s ease-out',
  willChange: 'background-color',
});

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
  border: 0,
});

globalStyle('button', {
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
});

globalStyle('a', {
  textDecoration: 'none',
  color: vars.themeColor.colors.mainFontColor,
});

globalStyle('@media (prefers-reduced-motion: reduce)', {
  animation: 'none !important',
  transition: 'none !important',
});