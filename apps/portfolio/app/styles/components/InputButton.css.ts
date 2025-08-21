import { style } from '@vanilla-extract/css';
import { vars } from '../common/color-tokens.css';

export const inputButton = style({
  marginTop: '10px',
  backgroundColor: '#ffffff',
  width: '280px',
  height: '56px',
  padding: '0 20px',
  borderRadius: '8px',
  color: vars.colors.grey800,
  border: `1px solid ${vars.colors.grey200}`,
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '500',
  textAlign: 'left',
  transition: 'all 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  ':hover': {
    borderColor: vars.colors.blue500,
    boxShadow: '0 2px 8px rgba(49, 130, 246, 0.15)'
  }
});

export const inputButtonPlaceholder = style({
  color: vars.colors.grey500
});

export const inputButtonIcon = style({
  color: vars.colors.grey500
});
