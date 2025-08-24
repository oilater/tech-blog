import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';

export const rootStyle = style({
  width: '100%',
  padding: '20px 0 8px',
});

export const paragraphStyle = style({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  height: '100%',
  fontSize: '36px',
  fontWeight: '700',
  color: vars.themeColor.colors.mainFontColor
});
