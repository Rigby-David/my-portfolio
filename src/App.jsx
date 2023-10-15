import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [resume, setResume] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);
  return (
    <>
      <Header
        setHome={setHome}
        setAbout={setAbout}
        setResume={setResume}
        setContact={setContact}
        setProjects={setProjects}
      />
      <Main
        home={home}
        about={about}
        resume={resume}
        contact={contact}
        projects={projects}
      />
      <Footer />
    </>
  );
}

export default App;
