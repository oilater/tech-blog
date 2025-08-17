import './styles/common/global.css';
import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from "./components/Layout";
import { PortfolioConfig } from '../config';
import { FloatingNav } from './components/FloatingNav';
import { linkItem } from './styles/components/FloatingNav.css';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export const metadata: Metadata = {
  title: "김성현 포트폴리오",
  description: "김성현 포트폴리오",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <FloatingNav>
          {PortfolioConfig.menu.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className={linkItem}
              target={link.isExternal ? '_blank' : '_self'}
            >
              {link.icon
                ? <Image src={link.icon} alt={link.label} width={24} height={24} />
                : link.label
              }
            </Link>
          ))}
        </FloatingNav>
        <Layout>{children}</Layout>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
