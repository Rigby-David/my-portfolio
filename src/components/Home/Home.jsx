import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <section className="name-role">
          <h1>David Rigby</h1>
          {/* <h3>Software Engineer</h3> */}
          <img
            src="/DavidToot.jpg"
            className="david-toot"
            alt="Profile picture"
          />
        </section>
        <section className="home-greeting-text">
          <span>
            <em>I&apos;m a React Developer.</em>
          </span>
          <span>
            <strong>Hey, I&apos;m David. </strong>
          </span>
          <span>I&apos;m a software engineer</span>
          <span>
            living in <strong>Estacada, OR.</strong>
          </span>
          <span>I&apos;m all about blending</span>
          <span>
            <strong>creativity and diversity</strong>
          </span>
          <span>into my work. I</span>
          <span>love exploring the</span>
          <span>
            <strong>endless possibilities</strong>
          </span>
          <span>that web development</span>
          <span>offers while making</span>
          <span>sure to keep things</span>
          <span>fun and exciting.</span>
          <span>
            <strong>Welcome to my portfolio!</strong>
          </span>
        </section>
      </div>
    </>
  );
}
