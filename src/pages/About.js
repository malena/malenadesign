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
                about design and business strategy.
              </h2>
            </div>
          </div>
          <div className="about-profile-description">
            <p>
              During my career as a{" "}
              <strong>Front End Developer and Designer</strong>, I've{" "}
              <strong>led multiple projects</strong>, working directly with{" "}
              <strong>clients and project managers</strong>,{" "}
              <strong>mentoring junior developers</strong>, while{" "}
              <strong>documenting</strong>,{" "}
              <strong>estimating timelines</strong>, and{" "}
              <strong>keeping within budget</strong>.
            </p>

            <p>
              I was <strong>elected as board member</strong> at a software
              agency and <strong>served for 5 years</strong>, where I gained
              insight into the{" "}
              <strong>business aspect of software projects</strong>. During this
              time, I{" "}
              <strong>expanded my expertise into UX design and branding</strong>
              , eventually <strong>transitioning into a consultant role</strong>{" "}
              where I offer <strong>valuable guidance to startups</strong>.
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
              I enjoy{" "}
              <strong>exploring different cultures through travel</strong>,{" "}
              <strong>meeting new people</strong>, and{" "}
              <strong>discovering diverse ways of living</strong>. Born and
              raised in <strong>Toronto</strong>, I recently{" "}
              <strong>co-founded a hostel and microbrewery</strong> with my
              husband in the small town of <strong>Cotacachi, Ecuador</strong>.
              I <strong>split my time between both places</strong>, working
              remotely while supporting this <strong>lifelong project</strong>
              —driven by our shared passion for{" "}
              <strong>travel and craft beer</strong>.
            </p>

            <p>
              My weekly routine usually includes{" "}
              <strong>running with my dogs</strong>,{" "}
              <strong>walking and hiking</strong>. I also love{" "}
              <strong>expressing myself through fashion</strong>,{" "}
              <strong>thrifting and creating outfits</strong>, and{" "}
              <strong>spending time with my family</strong>.
            </p>
          </div>
        </div>
        <img className="about-grid" src={grid} alt="Malena's Grid" />
      </section>
    </div>
  );
}

export default About;
