/* eslint-disable react/prop-types */
import "./Header.css";

export default function Header({
  setHome,
  setAbout,
  setResume,
  setContact,
  setProjects,
}) {
  function handleHome() {
    setAbout(false);
    setResume(false);
    setContact(false);
    setProjects(false);
    setHome(true);
  }

  function handleAbout() {
    setHome(false);
    setContact(false);
    setResume(false);
    setProjects(false);
    setAbout(true);
  }

  function handleResume() {
    setHome(false);
    setAbout(false);
    setContact(false);
    setProjects(false);
    setResume(true);
  }

  function handleContact() {
    setHome(false);
    setAbout(false);
    setResume(false);
    setProjects(false);
    setContact(true);
  }

  function handleProjects() {
    setHome(false);
    setAbout(false);
    setResume(false);
    setContact(false);
    setProjects(true);
  }

  return (
    <header className="header-container">
      <div className="home-icon-container" onClick={() => handleHome()}>
        <div className="home-icon">🌲</div>
      </div>
      <ul className="nav-link-container">
        <li className="nav-link" onClick={() => handleAbout()}>
          About
        </li>
        <li className="nav-link" onClick={() => handleProjects()}>
          Projects
        </li>
        <li className="nav-link" onClick={() => handleContact()}>
          Contact
        </li>
        <li className="nav-link-resume" onClick={() => handleResume()}>
          Resume
        </li>
      </ul>
    </header>
  );
}
