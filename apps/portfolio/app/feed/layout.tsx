export default function FeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: '768px', margin: '0 auto' }}>
      {children}
    </div>
  );
}