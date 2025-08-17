import Intro from "./Intro";
import Introduce from "./Introduce";
import { Content } from "./Content";
import { Work } from "./Work";
import { Education } from "./Education";
import { Outro } from "./Outro";

export default function Portfolio() {
  return (
    <div>
      <Intro />
      <Introduce />
      <Work />
      <Content />
      <Education />
      <Outro />
    </div>
  );
}