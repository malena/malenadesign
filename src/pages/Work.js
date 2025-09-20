import "./Work.css";
import arrow from "./../images/arrow.svg";

function Work() {
  return (
    <section id="Work" className="main-section work">
      <div className="section-content work-content">
        <h1 className="section-title work-title">Work</h1>
        <ul className="section-list work-section-list">
          <li className="section-list-item work-list-item">
            <div className="work-list-content">
              <h2 className="section-subtitle work-subtitle">
                Branding &amp; UX Strategy
              </h2>
              <p className="work-description">
                Led branding efforts, to create a branding guide. Transformed
                client ideas into wireframes and technical documentation for an
                app concept. Helped brainstorm monetization strategies through
                research, interviews, and surveys. Designed key app screens and
                built an interactive prototype for mobile visualization.
              </p>
            </div>
          </li>
          <li className="section-list-item work-list-item">
            <div className="work-list-content">
              <h2 className="section-subtitle work-subtitle">
                Mobile App Design
              </h2>
              <p className="work-description">
                Ran an in-person design sprint to understand and define the
                problem. Narrowing down most valuable features, drafting basic
                flow mockups, designing a UI library and creating the first
                drafts of a prototopye for interactive visualization. I was also
                involved in coding a component showcase based on the design
                library to facililate the development team.
              </p>
            </div>
          </li>
          <li className="section-list-item work-list-item">
            <div className="work-list-content">
              <h2 className="section-subtitle work-subtitle">
                Branded Web Design
              </h2>
              <p className="work-description">
                Assisted client with a branded microsite, using a collaborative
                approach to extract their vision. Helping them shape the tone,
                and guide their illustrator to create artwork in tune with their
                branding. The final product being a visualy strking responsive
                website that attracted a unique audience.
              </p>
            </div>
          </li>
          <li className="section-list-item work-list-item">
            <div className="work-list-content work-list-links">
              <a
                href="https://www.figma.com/deck/iNmX9IBOMqFrU0DQ1UUKVX/Porfolio-Slides?kind=deck&node-id=1-305"
                className="link"
              >
                View my portfolio
                <img className="link-icon" src={arrow} alt="arrow" />
              </a>
              <a
                href="https://www.silverorange.com/blog/roughing-things-in"
                className="link"
              >
                Read something I wrote
                <img className="link-icon" src={arrow} alt="arrow" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Work;
