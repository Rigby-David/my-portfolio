import { useEffect, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [cinemaScout, setCinemaScout] = useState(false);
  const [allegori, setAllegori] = useState(false);
  const [prints, setPrints] = useState(false);
  const [showClickEvent, setShowClickEvent] = useState(false);

  console.log("showClickEvent", showClickEvent);

  useEffect(() => {
    window.innerWidth <= 600
      ? setShowClickEvent(true)
      : setShowClickEvent(false);
  }, []);

  return (
    <>
      <div className="projects-page">
        <div className="project-and-descript">
          <div className="project-container">
            <div className="project-header">CinemaScout</div>
            <div className="content-container">
              {showClickEvent ? (
                cinemaScout ? (
                  <div className="desc" onClick={() => setCinemaScout(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                ) : (
                  <img
                    onClick={() => setCinemaScout(true)}
                    className="project-image"
                    src="/Screenshot 2023-10-15 161950.png"
                  />
                )
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
          {!showClickEvent && (
            <div className="descript">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          )}
        </div>
        <div className="project-container">
          <div className="project-header">Allegori</div>
          <div className="content-container">
            {showClickEvent ? (
              allegori ? (
                <div className="desc" onClick={() => setAllegori(false)}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              ) : (
                <img
                  onClick={() => setAllegori(true)}
                  className="project-image"
                  src="/allegori.png"
                />
              )
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
        <div className="project-container">
          <div className="project-header">Printstagram</div>
          <div className="content-container">
            {showClickEvent ? (
              prints ? (
                <div className="desc" onClick={() => setPrints(false)}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              ) : (
                <img
                  onClick={() => setPrints(true)}
                  className="project-image"
                  src="/prints.png"
                />
              )
            ) : (
              <img
                onClick={() => setPrints(true)}
                className="project-image"
                src="/prints.png"
              />
            )}
          </div>
          <div className="links">
            <a href="">Code</a>
            <a href="">Live Link</a>
          </div>
        </div>
      </div>
    </>
  );
}
