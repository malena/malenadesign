import "./About.css";

function About() {
  return (
    <section id="About" className="about main-section">
      <div className="section-content about-content">
        <h1 className="section-title about-title">About</h1>
        <ul className="section-list about-section-list">
          <li className="section-list-item about-list-item">
            <h2 className="section-subtitle about-subtitle">
              Over 15 years experience as a front-end web developer.
            </h2>
            <p className="about-description">
              Turning full designs into beautiful, responsive web pages and apps
              using various frameworks and tools.
            </p>
          </li>
          <li className="section-list-item about-list-item">
            <h2 className="section-subtitle about-subtitle">
              Crafting design guides and custom UI component libraries.
            </h2>
            <p className="about-description">
              Creating and turning Figma design guides and libraries into
              organized styles and{" "}
              <i>
                <strong>react.js</strong>
              </i>{" "}
              components.
            </p>
          </li>
          <li className="section-list-item about-list-item">
            <h2 className="section-subtitle about-subtitle">
              Mentoring junior devs and facilitating design workshops.
            </h2>
            <p className="about-description">
              Mentoring and guiding front-end developers in new projects,
              leading design meetings, workshops and running fun designathons
              and hackathons.
            </p>
          </li>
          <li className="section-list-item about-list-item">
            <h2 className="section-subtitle about-subtitle">
              Collaborating with clients and estimating project timelines.
            </h2>
            <p className="about-description">
              Doumenting and estimating development and design features to
              maintain timelines within budget.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
