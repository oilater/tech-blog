import { style } from '@vanilla-extract/css';

export const card = style({
  cursor: 'pointer',
  paddingTop: '10px',
  paddingBottom: '40px',
  borderBottom: `0.2px solid #e9ecef`,
});

export const cardHeader = style({
  marginBottom: '16px',
});

export const cardTitle = style({
  height: '75px',
  fontSize: '24px',
  fontWeight: '600',
  color: '#1a1a1a',
  lineHeight: '1.4',
  display: 'flex',
  alignItems: 'center',
});

export const cardDescription = style({
  fontSize: '16px',
  color: '#666666',
  lineHeight: '1.6',
  margin: '8px 0 32px',
});

export const cardTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '16px',
});

export const cardTag = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '32px',
  backgroundColor: '#f8f9fa',
  color: '#007bff',
  fontSize: '16px',
  fontWeight: '500',
  padding: '2px 16px',
  borderRadius: '16px',
});

export const cardFooter = style({
  paddingTop: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '14px',
  color: '#868e96',
});

export const cardDate = style({
  fontSize: '14px',
  color: '#868e96',
  fontWeight: '400',
});