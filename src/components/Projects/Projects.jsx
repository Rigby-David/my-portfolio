import { useEffect, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [cinemaScout, setCinemaScout] = useState(false);
  const [allegori, setAllegori] = useState(false);
  const [prints, setPrints] = useState(false);
  const [booBot, setBooBot] = useState(false);
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
                    Are you looking to discover your next favorite film or
                    television series? Using The Movie Database&apos;s RESTful
                    api, CinemaScout provides search functionality and a
                    discover feature to help you find your next watch. Built
                    with React and a whole lot of state management, this project
                    renders all components conditionally providing a smooth
                    user-friendly experience.
                  </div>
                ) : (
                  <img
                    onClick={() => setCinemaScout(true)}
                    className="project-image"
                    src="/Screenshot 2023-10-15 161950.png"
                    alt="CinemaScout"
                  />
                )
              ) : (
                <img
                  className="project-image"
                  src="/Screenshot 2023-10-15 161950.png"
                  alt="CinemaScout"
                  title="CinemaScout"
                />
              )}
            </div>
            <div className="links">
              <a href="https://github.com/SebastianAndDavid/CinemaScout">
                Code
              </a>
              <a href="https://spectacular-tiramisu-215e52.netlify.app/">
                Live Link
              </a>
            </div>
          </div>
          {!showClickEvent && (
            <div className="descript">
              Are you looking to discover your next favorite film or television
              series? Using The Movie Database&apos;s RESTful api, CinemaScout
              provides search functionality and a discover feature to help you
              find your next watch. Built with React and a whole lot of state
              management, this project renders all components conditionally
              providing a smooth user-friendly experience.
            </div>
          )}
        </div>
        <div className="project-and-descript">
          {!showClickEvent && (
            <div className="descript">
              Allegori is an meme-generating AI that dynamically seeds a bespoke
              RESTful API and suggests memes based on user input using the
              Imagga API.
            </div>
          )}
          <div className="project-container">
            <div className="project-header">Allegori</div>
            <div className="content-container">
              {showClickEvent ? (
                allegori ? (
                  <div className="desc" onClick={() => setAllegori(false)}>
                    Allegori is an meme-generating AI that dynamically seeds a
                    bespoke RESTful API and suggests memes based on user input
                    using the Imagga API.
                  </div>
                ) : (
                  <img
                    onClick={() => setAllegori(true)}
                    className="project-image"
                    src="/allegori.png"
                    alt="Allegori"
                    title="Allegori"
                  />
                )
              ) : (
                <img
                  className="project-image"
                  src="/allegori.png"
                  alt="Allegori"
                  title="Allegori"
                />
              )}
            </div>
            <div className="links">
              <a href="https://github.com/orgs/meme-t3am/repositories">Code</a>
              {/* <a href="">Live Link</a> */}
            </div>
          </div>
        </div>
        <div className="project-and-descript">
          <div className="project-container">
            <div className="project-header">Printstagram</div>
            <div className="content-container">
              {showClickEvent ? (
                prints ? (
                  <div className="desc" onClick={() => setPrints(false)}>
                    A mobile-first Instagram clone powered by the Petfinder API
                    that acts as social media for animals that are currently up
                    for adoption.
                  </div>
                ) : (
                  <img
                    onClick={() => setPrints(true)}
                    className="project-image"
                    src="/prints.png"
                    alt="Printstagram"
                    title="Printstagram"
                  />
                )
              ) : (
                <img
                  className="project-image"
                  src="/prints.png"
                  alt="Printstagram"
                  title="Printstagram"
                />
              )}
            </div>
            <div className="links">
              <a href="https://github.com/Printstagram/Printstagram">Code</a>
              <a href="https://printstagram.netlify.app/sign-in">Live Link</a>
            </div>
          </div>
          {!showClickEvent && (
            <div className="descript">
              A mobile-first Instagram clone powered by the Petfinder API that
              acts as social media for animals that are currently up for
              adoption.
            </div>
          )}
        </div>
        <div className="project-and-descript">
          {!showClickEvent && (
            <div className="descript">
              boo!BOT, your haunted enCounter, is a VS Code extension that was
              designed for those among us who are perpetually waiting for summer
              to come to an end and cold misty days to return. boo!BOT provides
              a daily countdown to Halloween - in a pop-up on launch as well as
              in your status bar - along with randomly generated ghoulish facts
              and festively haunting links - fetched from boo!BOT&apos;s very
              own API - via recurring pop-ups in your VS Code window.
            </div>
          )}
          <div className="project-container">
            <div className="project-header">boo!BOT</div>
            <div className="content-container">
              {showClickEvent ? (
                booBot ? (
                  <div className="desc" onClick={() => setBooBot(false)}>
                    boo!BOT, your haunted enCounter, is a VS Code extension that
                    was designed for those among us who are perpetually waiting
                    for summer to come to an end and cold misty days to return.
                    boo!BOT provides a daily countdown to Halloween - in a
                    pop-up on launch as well as in your status bar - along with
                    randomly generated ghoulish facts and festively haunting
                    links - fetched from boo!BOT&apos;s very own API - via
                    recurring pop-ups in your VS Code window.
                  </div>
                ) : (
                  <img
                    onClick={() => setBooBot(true)}
                    className="project-image"
                    src="/boobot.png"
                    alt="boo!Bot"
                    title="boo!BOT"
                  />
                )
              ) : (
                <img
                  className="project-image"
                  src="/boobot.png"
                  alt="boo!Bot"
                  title="boo!BOT"
                />
              )}
            </div>
            <div className="links">
              <a href="https://github.com/orgs/boo-BOT-Team/repositories">
                Code
              </a>
              <a href="https://marketplace.visualstudio.com/items?itemName=booatthebot.booBOT">
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
