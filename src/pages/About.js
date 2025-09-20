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
              <h4 className="title-label">Who is Malena?</h4>
              <h2 className="home-subtitle">
                <strong>PASSIONATE</strong>
                about design and business.
              </h2>
            </div>
          </div>
          <div className="about-profile-description">
            <p>
              I started my journey as a front-end developer, turning full
              designs into stunning, responsive web pages and applications using
              a variety of frameworks and tools. Little by little, I delved
              deeper into building design guides and libraries while refining
              styles and coding React.js components.
            </p>
            <p>
              I led multiple projects as a Front-End Lead, working directly with
              clients, mentoring junior developers, and providing guidance while
              documenting and estimating development and design features to
              ensure timelines stayed on track and within budget.{" "}
            </p>
            <p>
              I was elected as board member at a software agency and served for
              5 years where I gained insight into the business aspect of
              software projects. During this time, I expanded my expertise into
              UX design, and branding, eventually transitioning into a
              consultant role where I offer valuable guidance to startups.
            </p>
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
        </div>
      </section>
    </div>
  );
}

export default About;
