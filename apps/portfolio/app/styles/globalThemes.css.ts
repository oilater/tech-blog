// import {
//     globalStyle,
//     createThemeContract,
//     createGlobalTheme,
//     createTheme,
//   } from '@vanilla-extract/css';
  
//   export const global = createGlobalTheme(':root', {
//     fontSize: {
//       sm: '12px',
//       md: '14px',
//       lg: '16px',
//       xl: '18px',
//       xxl: '20px',
//       xxxl: '25px',
//       xxxxl: '32px',
//       mainTitle: '48px',
//     },
  
//     fontWeight: {
//       light: '300',
//       regular: '400',
//       medium: '500',
//       semibold: '600',
//       bold: '700',
//       black: '900',
//     }
//   });
  
//   const themeColor = createThemeContract({
//     color: {
//       bg: null,
//       contentBg: null,
//       headerBg: null,
//       text: null,
//       textSecondary: null,
//       border: null,
//       borderHover: null,
//     },
//   });
  
//   export const lightTheme = createTheme(themeColor, {
//     color: {
//       bg: '#ffffff',
//       contentBg: '#ffffff',
//       headerBg: '#ffffff',
//       text: '#292929',
//       textSecondary: '#7E7E87',
//       border: '#d1d6db',
//       borderHover: '#b0b8c1',
//     },
//   });
  
//   export const darkTheme = createTheme(themeColor, {
//     color: {
//       bg: '#0a0a0a',
//       contentBg: '#1a1a1a',
//       headerBg: '#1a1a1a',
//       text: '#ffffff',
//       textSecondary: '#b0b8c1',
//       border: '#333d4b',
//       borderHover: '#4e5968',
//     },
//   });
  
//   export const vars = { ...global, themeColor };
  
//   globalStyle('body', {
//     fontSize: global.fontSize.md,
//     backgroundColor: vars.themeColor.color.bg,
//     userSelect: 'none',
//   });