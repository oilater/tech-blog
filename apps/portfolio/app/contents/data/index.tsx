import { CDN_IMAGES } from "../../constants/cdn";
import { LINK_URL } from "../../constants/url";
import { ArticleData, ContentData } from "../types";
import { PortfolioArticle } from "../articles/PortfolioArticle";
import { FivaArticle } from "../articles/FivaArticle";

export const WORK_DATA: ContentData[] = [
  {
    id: "fiva",
    subTitle: "메타버스 AI 운동 앱",
    title: "Unity로 개발한 FIVA 이야기",
    description: "구스랩스에서 8개월 간 개발한 FIVA를 소개합니다.",
    image: CDN_IMAGES.FIVA,
    link: '/contents/fiva',
    isInternal: true,
  },
];

export const CONTENT_DATA: ContentData[] = [
  {
    id: "medical-charts",
    title: "Recharts로 데이터 표현하기",
    description: "백만 년 만에 공공 API 활용해보기 📊 클릭 시 배포 사이트로 이동합니다",
    image: CDN_IMAGES.MEDICAL_CHARTS,
    link: LINK_URL.MEDICAL_CHARTS,
    isInternal: false,
    tags: ["React", "Tanstack Query", "Recharts", "Emotion"],
  },
  {
    id: "portfolio-performance",
    title: "포트폴리오 성능 개선하기",
    description: "웹 성능 분석을 통해 LCP와 접근성 개선하기",
    image: CDN_IMAGES.PERFORMANCE,
    link: LINK_URL.PORTFOLIO_PERFORMANCE,
    isInternal: false,
    tags: ["Lighthouse", "Performance Tab", "WebPageTest"],
  },
  {
    id: "rally-portfolio",
    title: "인터렉션 시스템 Rally 만들기",
    description: "토스 인터렉션 팀의 Rally의 구조를 참고해 직접 만들어 본 인터렉션 시스템",
    image: CDN_IMAGES.PORTFOLIO,
    link: '/contents/rally-portfolio',
    isInternal: true,
    tags: ["React", "TypeScript", "Emotion", "GSAP", "Jotai"],
  },
  {
    id: "interactive-graph",
    title: "바닐라 JS로 상태관리 해보기",
    description: "useState 없이 Observer, State 패턴을 사용해 데이터가 변하면 관련된 UI를 업데이트 해보자",
    image: CDN_IMAGES.INTERACTIVE_GRAPH,
    link: LINK_URL.INTERACTIVE_GRAPH,
    isInternal: false,
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "homet-friend",
    title: "SwiftUI로 만들어 배포한 홈트친구",
    description: "맨몸 운동의 동기부여를 위해 SwiftUI를 배워서 5일만에 배포한 앱",
    image: CDN_IMAGES.HOMET_FRIEND,
    link: LINK_URL.HOMET_FRIEND,
    isInternal: false,
    tags: ["SwiftUI", "SwiftData"],
  },
  {
    id: "react-trip",
    title: "첫 React 프로젝트 여행의 민족",
    description: "삼성 청년 SW 아카데미 1학기 최종 프로젝트로, React로 처음 만들어 본 여행의 민족",
    image: CDN_IMAGES.REACT_TRIP,
    link: LINK_URL.REACT_TRIP,
    isInternal: false,
    tags: ["React", "Recoil"],
  },
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