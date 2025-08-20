import { Intro, Introduce, Content, Work, Education, Outro } from "./components";

export default function Portfolio() {
  return (
    <main>
      <Intro />
      <Introduce />
      <Work />
      <Content />
      <Education />
      <Outro />
    </main>
  );
}