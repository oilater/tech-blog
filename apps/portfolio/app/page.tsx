import { Intro, Introduce, Content, Work, Education, Outro } from './home/components';

export default function Home() {
  return (
    <main>
      <section>
        <Intro />
        <Introduce />
        <Work />
        <Content />
        <Education />
        <Outro />
      </section>
    </main>
  );
}