export function Post({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function Title({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function Content({ body }: { body: string }) {
  return <div dangerouslySetInnerHTML={{ __html: body }} />;
}

Post.Title = Title;
Post.Tags = Tags;
Post.Content = Content;