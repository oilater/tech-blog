import { globalStyle } from '@vanilla-extract/css';
import { Colors } from './color-tokens';

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

globalStyle('article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section', {
  display: 'block',
});

globalStyle('ol, ul, li', {
  listStyle: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
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
  color: Colors.grey800,
});

globalStyle('@media (prefers-reduced-motion: reduce)', {
  animation: 'none !important',
  transition: 'none !important',
}); 