import { vars } from "../styles/common/color-tokens.css";
import { tag } from "../styles/components/Tag.css";

type TagProps = {
  text: string;
};

export function Tag({ text }: TagProps) {
  const tagColor = getTagColor(text);

  return (
    <div className={tag}>
      <span style={{ color: tagColor }}>{text}</span>
    </div>
  );
}

const getTagColor = (text: string) => {
  switch (text) {
    case "React":
      return vars.colors.blue300;
    case "TypeScript":
      return vars.colors.blue500;
    case "HTML5":
      return vars.colors.red300;
    case "CSS3":
      return vars.colors.orange500;
    case "JavaScript":
      return vars.colors.teal500;
    case "NextJS":
      return vars.colors.grey700;
    case "Emotion":
      return vars.colors.pink400;
    case "GSAP":
      return vars.colors.green300;
    case "Jotai":
      return vars.colors.purple300;
    case "SCSS":
      return vars.colors.green500;
    case "Firebase":
      return vars.colors.red400;
    case "SocketIO":
      return vars.colors.purple400;
    case "SwiftUI":
        return vars.colors.blue900;
    case "SwiftData":
      return vars.colors.blue800;
    case "Recoil":
      return vars.colors.purple400;
    case "Lighthouse":
      return vars.colors.red300;
    case "Performance Tab":
      return vars.colors.orange500;
    case "WebPageTest":
      return vars.colors.teal500;
    default:
      return vars.colors.grey500;
  }
};