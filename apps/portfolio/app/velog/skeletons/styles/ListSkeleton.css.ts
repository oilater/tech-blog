import { style, keyframes } from "@vanilla-extract/css";
import { vars } from '../../../styles/globalTheme.css'

const pulse = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.5,
  },
});

export const wrapper = style({
  maxWidth: '768px',
  margin: '0 auto',
  width: '100%',
  selectors: {
    '&:not(:first-child)': {
      marginTop: '50px',
    },
  },
});

export const sectionTitle = style({
  height: '48px',
  width: '100%',
  borderRadius: '8px',
  marginBottom: '32px',
});

export const blogList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const card = style({
  cursor: 'default',
  paddingTop: '10px',
  paddingBottom: '40px',
  borderBottom: `0.2px solid ${vars.themeColor.colors.skeletonColor}`,
});

export const cardHeader = style({
  marginBottom: '16px',
});

export const cardTitle = style({
  marginTop: '10px',
  width: '60%',
  height: '36px',
  backgroundColor: vars.themeColor.colors.skeletonColor,
  borderRadius: '8px',
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  marginBottom: '8px',
});

export const cardDescription = style({
  width: '80%',
  height: '75px',
  backgroundColor: vars.themeColor.colors.skeletonColor,
  borderRadius: '6px',
  margin: '24px 0 0',
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const tags = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '6px',
});

export const tag = style({
  height: '32px',
  width: '75px',
  backgroundColor: vars.themeColor.colors.skeletonColor,
  borderRadius: '16px',
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const cardFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const cardDate = style({
  height: '18px',
  width: '40px',
  backgroundColor: vars.themeColor.colors.skeletonColor,
  borderRadius: '6px',
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});