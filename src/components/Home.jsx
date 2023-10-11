import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-h1">
        <h1>David</h1>
        <h1>Rigby</h1>
      </div>
      <h3>Software Engineer</h3>
      <section className="home-greeting-text">
        <span>
          <em>
            I&apos;m a results-oriented problem-solver, collaborator, and
            creator.{" "}
          </em>
        </span>
        <span>
          <strong>Hey, I&apos;m David.</strong>
          I&apos;m a software engineer living in Estacada, OR.
        </span>
      </section>
    </div>
  );
}
