/* eslint-disable react/prop-types */
import About from "../About";
import Contact from "../Contact";
import Home from "../Home/Home";
import "./Main.css";
import Projects from "../Projects";
import Resume from "../Resume";

export default function Main({ home, about, resume, contact, projects }) {
  return (
    <main>
      {home && <Home />}
      {about && <About />}
      {resume && <Resume />}
      {contact && <Contact />}
      {projects && <Projects />}
    </main>
  );
}