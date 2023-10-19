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
        <div className="home-icon">dr</div>
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
        <li className="nav-link">
          <a href="https://drive.google.com/file/d/1X0QDr7aSq8WyBFw8iAN8g7iN6ibXBK-v/view?usp=drive_link">
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}
