import { style } from '@vanilla-extract/css';
import { Colors } from '../common/color-tokens';

export const header = style({
  zIndex: 100,
  backgroundColor: 'rgba(232, 243, 255, 0.5)',
  backdropFilter: 'blur(5px)',
  borderRadius: '32px',
  position: 'fixed',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 24px 10px 24px',
  transition: 'opacity 0.3s ease-in-out',
  selectors: {
    'body.active-border &': {
      borderBottom: `1px solid ${Colors.grey300}`
    }
  }
});

export const innerNav = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '42px',
});

export const linkItem = style({
  fontSize: '17px',
  fontWeight: '500',
  color: Colors.grey800,
  cursor: 'pointer',
  transition: 'color 0.4s ease',
  ':hover': {
    color: Colors.blue700,
  }
});