import { globalStyle } from '@vanilla-extract/css';
import { vars } from './color-tokens.css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('body', {
  fontFamily: '"Pretendard", -apple-system, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
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
  color: vars.colors.grey800,
});

globalStyle('@media (prefers-reduced-motion: reduce)', {
  animation: 'none !important',
  transition: 'none !important',
}); 