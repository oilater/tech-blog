import { style } from "@vanilla-extract/css";

export const wrapper = style({
  maxWidth: '768px',
  margin: '0 auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const title = style({
  width: '60%',
  height: '48px',
  backgroundColor: '#f3f3f3',
  borderRadius: '8px',
  marginBottom: '32px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});

export const author = style({
  width: '100%',
  height: '24px',
  backgroundColor: '#f3f3f3',
  borderRadius: '6px',
  marginBottom: '8px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});

export const postedAt = style({
  width: '60%',
  height: '20px',
  backgroundColor: '#f3f3f3',
  borderRadius: '6px',
  marginBottom: '24px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});

export const content = style({
  width: '100%',
  height: '600px',
  backgroundColor: '#f3f3f3',
  borderRadius: '8px',
  marginTop: '5rem',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});

export const tags = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '24px',
});

export const tag = style({
  width: '60px',
  height: '24px',
  backgroundColor: '#f3f3f3',
  borderRadius: '12px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});

export const description = style({
  width: '100%',
  height: '20px',
  backgroundColor: '#f3f3f3',
  borderRadius: '6px',
  marginBottom: '14px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});