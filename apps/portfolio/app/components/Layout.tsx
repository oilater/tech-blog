import { SectionContainer } from '../sections/SectionContainer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SectionContainer>
      {children}
    </SectionContainer>
  );
}