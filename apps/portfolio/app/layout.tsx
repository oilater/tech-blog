import './styles/common/global.css';
import type { Metadata } from "next";
import { LayoutWrapper } from "./components/LayoutWrapper";
import { PortfolioConfig } from '../config';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { FloatingNav, NavItem } from './components/FloatingNav';

export const metadata: Metadata = {
  title: PortfolioConfig.title,
  description: PortfolioConfig.description,
  keywords: PortfolioConfig.keywords,
  authors: [{name: PortfolioConfig.author.name}],
  creator: PortfolioConfig.author.name,
  publisher: PortfolioConfig.author.name,
  metadataBase: new URL(PortfolioConfig.url),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <FloatingNav>
          {PortfolioConfig.menu.map((link) => (
            <NavItem key={link.label} href={link.path} label={link.label} icon={link.icon || ''} />
          ))}
        </FloatingNav>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
