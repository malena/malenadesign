import "./About.css";

function About() {
  return (
    <section id="About" className="about main-section">
      <div className="section-content about-content">
        <h1 className="section-title about-title">About</h1>
        <ul className="section-list">
          <li className="section-list-item about-list-item">
            <h2 className="section-subtitle about-subtitle">
              Over 15 years experience as a front-end web developer.
            </h2>
            <p className="about-description">
              For the last 15 years I dedicated myself as a front-end web
              developer, turning full designs into beautiful, responsive web
              pages and apps.
            </p>
          </li>
          <li className="section-list-item about-list-item">
            <h2 className="section-subtitle about-subtitle">
              Crafting design guides and custom UI component libraries.
            </h2>
            <p className="about-description">
              I have vast experience creating and turning Figma design guides
              and libraries into organized styles and{" "}
              <i>
                <strong>react.js</strong>
              </i>{" "}
              components.
            </p>
          </li>
          <li className="section-list-item about-list-item">
            <h2 className="section-subtitle about-subtitle">
              I’m a passionate Creative Lead.
            </h2>
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
