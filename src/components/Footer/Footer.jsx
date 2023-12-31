import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="link-container">
        <a title="LinkedIn" href="https://linkedin.com/in/david-rigby2022">
          <img src="/linkedin-svgrepo-com.svg" />
        </a>
        <a title="GitHub" href="https://github.com/Rigby-David">
          <img src="/github-142-svgrepo-com.svg" />
        </a>
        <a
          title="Resume"
          href="https://drive.google.com/file/d/1X0QDr7aSq8WyBFw8iAN8g7iN6ibXBK-v/view?usp=drive_link"
        >
          <img src="/resume-business-cv-work-job-curriculum-2-svgrepo-com.svg" />
        </a>
      </div>
    </footer>
  );
}
