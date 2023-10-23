/* eslint-disable react/prop-types */
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import "./Main.css";
import Projects from "../Projects/Projects";
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
