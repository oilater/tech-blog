import { header, innerNav } from '../styles/components/FloatingNav.css';

type FloatingNavProps = {
  children: React.ReactNode;
};

export function FloatingNav({ children }: FloatingNavProps) {
  return (
    <header className={header}>
      <div className={innerNav}>
        {children}
      </div>
    </header>
  );
}