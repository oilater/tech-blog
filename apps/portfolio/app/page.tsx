import {
  Content,
  Education,
  Intro,
  Introduce,
  Outro,
  Work,
} from './(home)/components';

export default function Home() {
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
