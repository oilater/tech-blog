import { header, innerNav } from '../styles/components/FloatingNav.css';

export function FloatingNav({ children }: { children: React.ReactNode }) {
  return (
    <header className={header}>
      <div className={innerNav}>
        {children}
      </div>
    </header>
  );
}