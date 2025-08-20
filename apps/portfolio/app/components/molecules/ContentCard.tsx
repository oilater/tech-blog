import { Card } from "../atoms/Card";
import { Tag } from "../Tag";
import { CONTENT_DATA } from "../../constants/content-data";

type ContentCardProps = {
  content: typeof CONTENT_DATA[number]; 
};

export function ContentCard({ content }: ContentCardProps) {
  if (!content) return null;
  
  return (
    <Card.Root 
      key={content.id}
      image={content.image}
      onClick={() => {
        if (content.isInternal) {
          // navigate(content.link);
        } else {
          window.open(content.link, "_blank");
        }
      }}
    >
      <Card.Title>{content.title}</Card.Title>
      <Card.Description>{content.description}</Card.Description>
      <Card.Tags>
        {content.tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </Card.Tags>
    </Card.Root>
  );
}