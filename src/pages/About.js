import "./About.css";
import profile from "./../images/about-profile.png";
import resume from "./../MalenaAndradeResume.pdf";

function About() {
  return (
    <div className="about">
      <section className="about-main-section">
        <div className="about-content">
          <div className="about-profile">
            <img
              className="about-profile-image"
              height="200"
              width="200"
              src={profile}
              alt="logo"
            />
            <div className="about-profile-title">
              <h4 className="title-label">About Me</h4>
              <h2 className="home-subtitle">
                <strong>PASSIONATE</strong>
                about continuous learning.
              </h2>
              <p>
                Currently I am taking a Masters Program at LABASAD in{" "}
                <strong>Creative Direction</strong> with an AI specialization.
              </p>
            </div>
          </div>
          <div className="about-profile-description">
            <p>
              My career has spanned across roles as a Front End Developer, UX
              Designer, Lead Designer, Project Manager, Board Member and
              Consultant, working on multiple projects directly with CEO's,
              managers, developers and designers.
            </p>
            <p>
              Over the years I have gained insight into the development, design
              and business aspect of software projects. Today I aspire to delve
              into the role of Creative Director and turn good products into
              successful brands.
            </p>
          </div>
        </div>
        <div className="about-buttons">
          <a className="button button-external" href={resume}>
            <h3>Resume</h3>
            <p>View Malena's Resume</p>
          </a>
          <a
            className="button button-external"
            href="https://www.linkedin.com/in/malenaandrade/"
          >
            <h3>LinkedIn </h3>
            <p>Connect with me</p>
          </a>
        </div>
        <div className="about-courses">
          <h4>Certifications, Conferences and Workshops</h4>
          <ul className="education-list">
            <li>
              <p>
                <strong>
                  2026 (12 months) - LABASAD: Barcelona School of Arts and
                  Design
                </strong>
                <br />
                Creative Direction with specialization in AI (online)
              </p>
            </li>
            <li>
              <p>
                <strong>2023 (1 day) - Ebaq Design</strong>
                <br />
                Brand Strategy Course (online)
              </p>
            </li>
            <li>
              <p>
                <strong>2022 (6 weeks) - Coursera</strong>
                <br />
                Human Centered Design (online)
              </p>
            </li>
            <li>
              <p>
                <strong>2021 (4 weeks) - Shaw Academy</strong>
                <br />
                Graphic Design (online)
              </p>
            </li>
            <li>
              <p>
                <strong>2020 (1 day) - An Event Apart</strong>
                <br />
                Front-End Focus (online)
              </p>
            </li>
            <li>
              <p>
                <strong>2013 (2 days) - Bocoup</strong>
                <br />
                Building Web Applications with backbone.js
              </p>
            </li>
            <li>
              <p>
                <strong>2013 (2 days) - jQueryTO</strong>
                <br />
                JavaScript & jQuery Web Conference
              </p>
            </li>
            <li>
              <p>
                <strong>2010 (4 days) - Adaptive Path</strong>
                <br />
                UX Intensive: Design Strategy
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="about-main-section about-extra">
        <div className="about-content">
          <div className="about-profile">
            <div className="about-profile-title">
              <h2 className="about-subtitle">
                I have a passion for outdoor activities, craft beer and travel.
              </h2>
            </div>
          </div>
          <div className="about-extra-description">
            <p>
              In 2019 I co-founded a hostel and microbrewery with my partner in
              the small town of Cotacachi, Ecuador. I split my time between this
              lifelong project, and working remotely in the tech industry.
            </p>

            <p>
              My weekly routine usually includes morning runs with my dog,
              walking and hiking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
