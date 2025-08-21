import { style } from '@vanilla-extract/css';
import { Colors } from '../common/color-tokens';

export const container = style({
  minHeight: '100vh',
});

export const header = style({
  textAlign: 'center',
  marginBottom: '4rem',
});

export const title = style({
  fontSize: '3rem',
  fontWeight: '700',
  marginBottom: '1rem',
  color: '#3182F6', 
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '2.5rem',
    }
  }
});

export const subtitle = style({
  fontSize: '1.25rem',
  color: Colors.grey700,
  maxWidth: '42rem',
  margin: '0 auto',
  lineHeight: '1.6',
});

export const content = style({
  maxWidth: '64rem',
  margin: '0 auto',
});

export const section = style({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(8px)',
  borderRadius: '1rem',
  padding: '2rem',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'background-color 0.3s ease',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.15)',
  }
});

export const sectionTitle = style({
  fontSize: '1.5rem',
  fontWeight: '700',
  marginBottom: '1.5rem',
  color: '#3182F6',
  display: 'flex',
  alignItems: 'center',
});

export const paragraph = style({
  marginBottom: '1rem',
  color: Colors.grey700,
  lineHeight: '1.7',
  fontSize: '1rem',
});

export const quote = style({
  backgroundColor: Colors.grey100,
  padding: '1.5rem',
  borderLeft: '4px solid #3182F6',
  margin: '1.5rem 0',
});

export const quoteText = style({
  color: Colors.grey700,
  fontStyle: 'italic',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  marginBottom: '0.5rem',
});

export const quoteAuthor = style({
  color: Colors.grey700,
  fontSize: '0.875rem',
  textAlign: 'right',
});

export const videoContainer = style({
  textAlign: 'center',
  marginTop: '3rem',
});

export const video = style({
  borderRadius: '1rem',
  padding: '1.5rem',
});

export const videoElement = style({
  objectFit: 'contain',
  borderRadius: '0.75rem',
  width: '50%',
  
});

export const highlightText = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#fbbf24',
});