import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-info">
        <div className="about-bio">
          <span>I&apos;m a Full-Stack software engineer.</span>
          <span>I love turning an idea into a reality through </span>
          <span>collaboration and code. With over 6 years </span>
          <span>experience as a lead installer in the </span>
          <span>specialty concrete resurfacing industry, </span>
          <span>and small businesses, I&apos;m excited to apply </span>
          <span>my leadership and technical skills </span>
          <span>to tech where my contributions will </span>
          <span>transform the world around me into </span>
          <span>a dynamic and accessible place for all.</span>
        </div>
        <div className="about-personal">
          <span>When I&apos;m not coding, you can find me </span>
          <span>at my local disc golf course, reading a </span>
          <span>fantasy novel, or working in my yard. </span>
          <span>Now, please enjoy this photo of my 9 month old </span>
          <span>lab mix, Petunia, doing a big blep.</span>
        </div>
      </div>
      <div className="about-image">
        <img src="/DavidToot.jpg" className="profile-pic" />
      </div>
    </div>
  );
}
// http://www.w3.org/2000/svg
