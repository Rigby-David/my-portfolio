import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [time, setTime] = useState(0);

  function textTimer() {
    setTimeout(() => {
      setTime(time + 1);
    }, 5000);

    if (time >= 2) {
      setTime(0);
    }
  }

  textTimer();

  return (
    <>
      <div className="home-and-img">
        <div className="home">
          <div className="home-h1">
            <h1>David Rigby</h1>
          </div>
          <h3>Software Engineer</h3>
          <section className="home-greeting-text">
            {time === 0 && (
              <span>
                <em>I&apos;m a problem-solver</em>
              </span>
            )}
            {time === 1 && (
              <span>
                <em>I&apos;m a React Developer.</em>
              </span>
            )}
            <span>
              <strong>Hey, I&apos;m David. </strong>
              I&apos;m a software engineer living in Estacada, OR.
            </span>
          </section>
        </div>
        <img src="/DavidToot.jpg" />
      </div>
    </>
  );
}
