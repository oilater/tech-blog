import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';

export const section = style({
  marginBottom: '4rem'
});

export const sectionTitle = style({
  margin: '36px 0 36px',
  fontSize: '25px',
  marginBottom: '20px',
  color: vars.themeColor.colors.cardTitleFontColor
});

export const highlightText = style({
  color: vars.themeColor.colors.cardTitleFontColor,
  fontWeight: 'bold',
  borderRadius: '2px',
  letterSpacing: '0em'
});

export const figure = style({
  margin: '60px 0 20px 0',
  textAlign: 'center'
});

export const image = style({
  width: '100%',
  height: '500px',
  borderRadius: '16px'
});

export const avatarImage = style({
  height: '600px',
  objectFit: 'contain'
});

export const avatarMoveImage = style({
  height: '700px',
  objectFit: 'contain'
});

export const gameImage = style({
  objectFit: 'contain'
});

export const codeReviewImage = style({
  height: '300px',
  objectFit: 'contain'
});

export const commentImage = style({
  height: '200px',
  objectFit: 'contain'
});

export const slackImage = style({
  height: '700px',
  objectFit: 'contain'
});

export const introImage = style({
  height: '600px',
  objectFit: 'contain'
});

export const timelineImage = style({
  height: '800px',
  objectFit: 'contain'
});

export const articleMapImage = style({
  height: 'auto',
  objectFit: 'contain'
});

export const portfolioImage = style({
  width: '100%',
  borderRadius: '16px'
});

export const captionStyle = style({
  fontSize: '13px',
  color: vars.themeColor.colors.cardTitleFontColor,
  lineHeight: '1.2',
  margin: '0',
  marginTop: '6px',
  marginBottom: '6rem'
});

export const imageContainer = style({
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'flex-start'
});

export const containerImage = style({
  height: 'auto',
  objectFit: 'cover'
});

export const imagesSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const avatarImageCombined = style([image, avatarImage]);
export const avatarMoveImageCombined = style([image, avatarMoveImage]);
export const gameImageCombined = style([image, gameImage]);
export const codeReviewImageCombined = style([image, codeReviewImage]);
export const commentImageCombined = style([image, commentImage]);
export const slackImageCombined = style([image, slackImage]);
export const containerImageCombined = style([image, containerImage]);

export const introImageCombined = style([portfolioImage, introImage]);
export const timelineImageCombined = style([portfolioImage, timelineImage]);
export const articleMapImageCombined = style([portfolioImage, articleMapImage]);
