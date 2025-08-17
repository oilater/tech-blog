import { SectionContainer } from '../sections/SectionContainer';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SectionContainer>
      {children}
    </SectionContainer>
  );
}