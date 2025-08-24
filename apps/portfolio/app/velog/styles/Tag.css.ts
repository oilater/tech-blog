import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/globalTheme.css';

export const tags = style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px',
  });
  
  export const tag = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '32px',
    backgroundColor: vars.themeColor.colors.tagBackground,
    color: vars.themeColor.colors.tagItemColor,
    fontSize: '16px',
    fontWeight: '500',
    padding: '2px 16px',
    borderRadius: '16px',
  });
  