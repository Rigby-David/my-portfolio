import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <section className="carrot-container">
          <img
            className="carrot"
            src="https://www.svgrepo.com/show/510041/left-arrow.svg"
          />
        </section>
        <section className="project-image-container">
          <img
            className="project-image"
            src="../../../public/Screenshot 2023-10-15 161950.png"
          />
        </section>
        <section className="carrot-container">
          <img
            className="carrot"
            src="https://www.svgrepo.com/show/510165/right-arrow.svg"
          />
        </section>
      </div>
      <div className="description-container">
        <section className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </section>
      </div>
    </>
  );
}
