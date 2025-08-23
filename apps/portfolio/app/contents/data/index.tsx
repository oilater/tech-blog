import { CDN_IMAGES } from "../../constants/cdn";
import { LINK_URL } from "../../constants/url";
import { ArticleData, ContentData } from "../types";
import { PortfolioArticle } from "../articles/PortfolioArticle";
import { FivaArticle } from "../articles/FivaArticle";

export const ARTICLES: ContentData[] = [
  {
    id: "velog-article",
    subTitle: "최근 포스트",
    title: "커스텀 Velog를 만들어보자 📝",
    description: "포트폴리오에 Velog를 띄워보았어요",
    image: CDN_IMAGES.VELOG,
    link: '/feed/포트폴리오에-Velog-글을-띄워보자',
    isInternal: true,
  },
];

export const CONTENTS: ContentData[] = [
  {
    id: "portfolio-performance",
    title: "포트폴리오 성능 분석",
    description: "LCP와 성능 탭 점수 개선해보기",
    image: CDN_IMAGES.PERFORMANCE,
    link: LINK_URL.PORTFOLIO_PERFORMANCE,
    isInternal: false,
    tags: ["Lighthouse", "Performance Tab", "WebPageTest"],
  },
  {
    id: "rally-portfolio",
    title: "인터렉션 시스템 Rally 만들기",
    description: "토스의 Rally 구조를 참고해 Interaction System 구현하기",
    image: CDN_IMAGES.PORTFOLIO,
    link: '/contents/rally-portfolio',
    isInternal: true,
    tags: ["React", "TypeScript", "Emotion", "GSAP", "Jotai"],
  },
  {
    id: "fiva",
    title: "Unity로 개발한 FIVA 이야기",
    description: "구스랩스에서 8개월 간 개발한 FIVA를 소개합니다.",
    image: CDN_IMAGES.FIVA,
    link: '/contents/fiva',
    isInternal: true,
    tags: ["Unity", "C#", "Firebase"],
  },
  {
    id: "medical-charts",
    title: "[Recharts] 데이터 시각화하기",
    description: "공공 API 활용해 차트 만들어보기",
    image: CDN_IMAGES.MEDICAL_CHARTS,
    link: LINK_URL.MEDICAL_CHARTS,
    isInternal: false,
    tags: ["React", "Tanstack Query", "Recharts", "Emotion"],
  },
  {
    id: "interactive-graph",
    title: "바닐라 JS로 상태관리 해보기",
    description: "Observer, State 패턴을 사용해 데이터가 변하면 관련된 UI를 업데이트 해보자",
    image: CDN_IMAGES.INTERACTIVE_GRAPH,
    link: LINK_URL.INTERACTIVE_GRAPH,
    isInternal: false,
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "homet-friend",
    title: "[홈트친구] 운동 앱을 만들어보자",
    description: "SwiftUI 배워서 앱 기획, 디자인, 개발 및 배포, 홍보까지 해보기",
    image: CDN_IMAGES.HOMET_FRIEND,
    link: LINK_URL.HOMET_FRIEND,
    isInternal: false,
    tags: ["SwiftUI", "SwiftData"],
  },
  // {
  //   id: "react-trip",
  //   title: "[2인 프로젝트] 여행의 민족",
  //   description: "삼성 청년 SW 아카데미 1학기 최종 프로젝트로, React로 처음 만들어 본 여행의 민족",
  //   image: CDN_IMAGES.REACT_TRIP,
  //   link: LINK_URL.REACT_TRIP,
  //   isInternal: false,
  //   tags: ["React", "Recoil"],
  // },
];

const ARTICLE_KEYS = {
  FIVA: "fiva",
  PORTFOLIO: "rally-portfolio",
  RALLY_REFACTORING: "rally-refactoring",
} as const;

export const articleMap: Record<string, ArticleData> = {
  
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
    content: <FivaArticle />,
  },
};