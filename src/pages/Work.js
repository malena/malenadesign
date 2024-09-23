import "./Work.css";
import responsiveIcon from "./../images/responsive-icon.svg";
import wireframingIcon from "./../images/wireframing-icon.svg";
import boardIcon from "./../images/board-icon.svg";

function Work() {
  return (
    <section id="Work" className="work main-section">
      <div className="section-content work-content">
        <h1 className="section-title work-title">Work</h1>
        <ul className="section-list work-section-list">
          <li className="section-list-item work-list-item">
            <div className="work-list-content">
              <h2 className="section-subtitle work-subtitle">
                UX &amp; UI Design Lead
              </h2>
              <h3 className="work-subtitle-sub">Canadian Starmaker Fund</h3>
              <p className="work-description">
                Run design sprints and meetings, create new user flows,
                re-design user interface and replace old codebase with react
                components.
              </p>
            </div>
            <div className="work-icon">
              <img
                className="icon-wireframing"
                src={wireframingIcon}
                alt="Wireframing"
              />
            </div>
          </li>
          <li className="section-list-item work-list-item">
            <div className="work-list-content">
              <h2 className="section-subtitle work-subtitle">
                Branding &amp; Website Design Lead
              </h2>
              <h3 className="work-subtitle-sub">EM:RAP Urgent Care</h3>
              <p className="work-description">
                Lead branding meetings, create moodboards, mockups, style guide
                and code a branded website for an Urgent Care audio subscription
                program.
              </p>
            </div>
            <div className="work-icon">
              <img
                className="icon-responsive"
                src={responsiveIcon}
                alt="Responsive Devices"
              />
            </div>
          </li>
          <li className="section-list-item work-list-item">
            <div className="work-list-content">
              <h2 className="section-subtitle work-subtitle">Board Member</h2>
              <h3 className="work-subtitle-sub">
                Silverorange Board of Directors
              </h3>
              <p className="work-description">
                Oversee and forecast budgets, provide feedback on shareholder
                policies, restructuring of company hierarchy, hiring and company
                health confidence rating.
              </p>
            </div>
            <div className="work-icon">
              <img className="icon-board" src={boardIcon} alt="Board Room" />
            </div>
          </li>
        </ul>
      </div>
      <h2 className="section-subtitle testimonial-subtitle">
        What co-workers are saying about me!
      </h2>
      <ul className="section-list work-section-testimonials">
        <li className="work-section-testimonial testimonial-1">
          I've had the pleasure of working with Malena for 7+ years. Many of
          those years were as peers at a board level. Malena is thoughtful, hard
          working, and thorough. She is also a talented designer with a fine
          attention to detail. -{" "}
          <strong>
            <i>Dan James, Founder at Silverorange</i>
          </strong>
        </li>
        <li className="work-section-testimonial testimonial-2">
          Malena is exceptionally talented and dedicated developer, eager and
          able to tackle hard challenges and pick up new skills on the fly. She
          cares deeply about her code and her craft and can always be counted on
          her document and share her solutions with the rest of the team.
          Working in a virtual team she clearly showed she treats work as
          something much greater than a job, and that's a gift to any team. -
          <strong>
            <i>Michael Lewkowitz, General Partner at Possibilian</i>
          </strong>
        </li>
        <li className="work-section-testimonial testimonial-3">
          I've worked with Malena for years as both as a designer and a
          developer for web and web mobile projects. She always brings an
          original perspective to each project she works on. She excels at
          client collaboration and bringing stakeholders into the design
          process. -{" "}
          <strong>
            <i>Clare Raspopow, CEO at Silverorange</i>
          </strong>
        </li>
      </ul>
    </section>
  );
}

export default Work;
