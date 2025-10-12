import "./About.css";
import profile from "./../images/about-profile.png";
import grid from "./../images/about-grid.svg";
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
              <h4 className="title-label">Who is Malena professionally?</h4>
              <h2 className="home-subtitle">
                <strong>PASSIONATE</strong>
                about design and business.
              </h2>
            </div>
          </div>
          <div className="about-profile-description">
            <p>
              During my career as a Front End Developer and Designer, I've led
              multiple projects, working directly with clients and project
              managers, mentoring junior developers, while documenting,
              estimating timelines and keeping within budget.
            </p>
            <p>
              I was elected as board member at a software agency and served for
              5 years where I gained insight into the business aspect of
              software projects. During this time, I expanded my expertise into
              UX design, and branding, eventually transitioning into a
              consultant role where I offer valuable guidance to startups.
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
      </section>
      <section className="about-main-section about-extra">
        <div className="about-content">
          <div className="about-profile">
            <div className="about-profile-title">
              <h4 className="title-label about-title-label">
                Who am I Offline?
              </h4>
              <h2 className="about-subtitle">
                A curious and adventurous soul, inspired by learning from
                others.
              </h2>
            </div>
          </div>
          <div className="about-extra-description">
            <p>
              I enjoy exploring different cultures through travel, meeting new
              people, and discovering diverse ways of living. Born and raised in
              Toronto, I recently co-founded a hostel and microbrewery in the
              small town of Cotacachi, Ecuador. I split my time between both
              places, working remotely while supporting this lifelong
              project—driven by our shared passion for travel and craft beer.
            </p>
            <p>
              My weekly routine usually includes running with my dogs, walking
              and hiking. I also love expressing myself through fashion,
              thrifting and creating outfits as well as spending time with my
              family.
            </p>
          </div>
        </div>
        <img className="about-grid" src={grid} alt="Malena's Grid" />
      </section>
    </div>
  );
}

export default About;
