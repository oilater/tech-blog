import './styles/common/global.css';
import type { Metadata } from "next";
import { LayoutWrapper } from "./components/LayoutWrapper";
import { PortfolioConfig } from '../config';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { FloatingNav } from './components/FloatingNav';
import { NavIcon } from './components/NavIcon';
import { QueryProvider } from './components/providers/QueryProvider';
import { VelogPostLoader } from './velog/components/VelogPostLoader';

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
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/apple-touch-icon.png',
    apple: '/favicon/apple-touch-icon.png',
    other: {
      url: '/favicon/favicon.ico',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <FloatingNav>
          {PortfolioConfig.menu.map((link) => (
            <NavIcon key={link.label} href={link.path} label={link.label} icon={link.icon || ''} />
          ))}
        </FloatingNav>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer />
        <QueryProvider>
          <VelogPostLoader />
        </QueryProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}