export default function About() {
  return (
    <div>
      <h1>About</h1>
      <video
        width="500px"
        height="300px"
        controls
        preload="metadata"
      >
        <source src="/jazz.mov" type="video/mp4" />
      </video>
    </div>
  );
}