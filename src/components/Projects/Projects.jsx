import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [cinemaScout, setCinemaScout] = useState(false);
  const [allegori, setAllegori] = useState(false);

  return (
    <div className="projects-page">
      <div className="cinema-container">
        <div className="project-header">CinemaScout</div>
        <div className="content-container">
          {cinemaScout ? (
            <div className="desc" onClick={() => setCinemaScout(false)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          ) : (
            <img
              onClick={() => setCinemaScout(true)}
              className="project-image"
              src="/Screenshot 2023-10-15 161950.png"
            />
          )}
        </div>
        <div className="links">
          <a href="">Code</a>
          <a href="">Live Link</a>
        </div>
      </div>
      <div className="cinema-container">
        <div className="project-header">Allegori</div>
        <div className="content-container">
          {allegori ? (
            <div className="desc" onClick={() => setAllegori(false)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          ) : (
            <img
              onClick={() => setAllegori(true)}
              className="project-image"
              src="/allegori.png"
            />
          )}
        </div>
        <div className="links">
          <a href="">Code</a>
          <a href="">Live Link</a>
        </div>
      </div>
    </div>
  );
}
