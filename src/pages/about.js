import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1 className="about-title">About</h1>
        <ul>
          <li className="about-list-item">
            <h2 className="about-subtitle">
              Over 15 years experience as a front-end web developer.
            </h2>
            <p className="about-description">
              For the last 15 years I dedicated myself as a front-end web
              developer, turning full designs into beautiful, responsive html
              pages and web apps.
            </p>
          </li>
          <li className="about-list-item">
            <h2 className="about-subtitle">
              Crafting design guides and custom UI component libraries.
            </h2>
            <p className="about-description">
              I have vast experience creating and turning Figma design guides
              into organized styles and react components in the codebase.
            </p>
          </li>
          <li className="about-list-item">
            <h2 className="about-subtitle">I’m a passionate Creative Lead.</h2>

            <p className="about-description">
              Besides leading teams to successful project launches, I love
              leading workshops, hackathons and designathons. I enjoy sharing
              what I learn.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
