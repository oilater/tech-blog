import type { ReactNode } from 'react';
import FivaArticle from '../FivaArticle';
import PortfolioArticle from '../PortfolioArticle';
import { CDN_IMAGES } from '../../cdn';

const ARTICLE_KEYS = {
  FIVA: "fiva",
  PORTFOLIO: "rally-portfolio",
  RALLY_REFACTORING: "rally-refactoring",
} as const;

export type ArticleData = {
  title: string;
  date: string;
  imageUrl: string;
  content: ReactNode;
}

type ArticleMap = Record<string, ArticleData>;

export const articleMap: ArticleMap = {
  
  [ARTICLE_KEYS.PORTFOLIO]: {
    title: "인터렉션 시스템 Rally 만들기",
    date: "2025-06-30",
    imageUrl: CDN_IMAGES.PORTFOLIO_DETAIL,
    content: <PortfolioArticle />
  },
  [ARTICLE_KEYS.FIVA]: {
    title: "Unity로 개발한 FIVA 이야기",
    date: "2025-07-05",
    imageUrl: CDN_IMAGES.FIVA,
    content: <FivaArticle />
  },
};