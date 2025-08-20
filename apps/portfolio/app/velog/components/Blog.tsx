import { ListRow } from "./ListRow";

type BlogProps = {
  children: React.ReactNode;
}

export function Blog({ children }: BlogProps) {
  return (
    <div>
      {children}
    </div>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>{children}</div>
  );
}

Blog.List = List;
Blog.Row = ListRow;