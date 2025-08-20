import { style } from "@vanilla-extract/css";

export const wrapper = style({
  maxWidth: '768px',
  margin: '0 auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const title = style({
  width: '80%',
  height: '60px',
  backgroundColor: '#f3f3f3',
  borderRadius: '8px',
  marginBottom: '10px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});

export const description = style({
  width: '100px',
  height: '20px',
  backgroundColor: '#f3f3f3',
  borderRadius: '6px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});

export const author = style({
  width: '100%',
  height: '24px',
  backgroundColor: '#f3f3f3',
  borderRadius: '6px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});

export const tags = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '6px',
});

export const tag = style({
  height: '32px',
  width: '75px',
  backgroundColor: '#f3f3f3',
  borderRadius: '16px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
});