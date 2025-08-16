import './styles/common/global.css';
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Layout from "./sections/Layout";

export const metadata: Metadata = {
  title: "김성현 포트폴리오",
  description: "김성현 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Layout />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
