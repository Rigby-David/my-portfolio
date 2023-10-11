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
      <div className="nav-link-container">
        <div className="nav-link" onClick={() => handleAbout()}>
          About
        </div>
        <div className="nav-link" onClick={() => handleResume()}>
          Resume
        </div>
        <div className="nav-link" onClick={() => handleContact()}>
          Contact
        </div>
        <div className="nav-link" onClick={() => handleProjects()}>
          Projects
        </div>
      </div>
    </header>
  );
}
