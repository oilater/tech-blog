'use client';

import { usePathname } from 'next/navigation';
import { SectionContainer } from './SectionContainer';
import { FloatingNav } from './FloatingNav';
import { BlogConfig } from '../../config';
import { NavIcon } from './NavIcon';
import { Footer } from './Footer';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isArticle = pathname.includes('/contents/');

  if (isArticle) {
    return <div>{children}</div>;
  }
  
  return (
    <SectionContainer>
      <FloatingNav>
        {BlogConfig.menu.map((link) => (
          <NavIcon key={link.label} href={link.path} label={link.label} />
        ))}
      </FloatingNav>
      {children}
      <Footer />
    </SectionContainer>
  );
}