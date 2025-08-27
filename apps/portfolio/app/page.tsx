import { Intro, Introduce, Content, Work, Education, Outro } from './(home)/components';

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

export const revalidate = false;