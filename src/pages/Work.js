import "./Work.css";
import checkbox from "./../images/checkbox.svg";

function Work() {
  return (
    <section className="work">
      <div className="work-content">
        <h1 className="work-title">Work</h1>
        <ul>
          <li className="work-list-item">
            <h2 className="work-subtitle">Canadian Starmaker Fund</h2>
            <p className="work-description">
              The aim of this project was to re-design the application, create
              new user flows and replace old codebase with react components.
            </p>
            <div className="work-summary">
              <p>
                <strong>Role:</strong> Lead Designer
              </p>
              <p>
                <strong>Duration:</strong> 12 weeks
              </p>
            </div>
            <ul className="work-list-points">
              <li className="work-list-points-item">
                <img className="work-checkbox" src={checkbox} alt="checkbox" />
                <p>
                  Leading meetings directly with client and developers to ensure
                  common vision, goals, scope and processes.
                </p>
              </li>
              <li className="work-list-points-item">
                <img className="work-checkbox" src={checkbox} alt="checkbox" />
                <p>
                  Building a component based design library and style guide.
                </p>
              </li>
              <li className="work-list-points-item">
                <img className="work-checkbox" src={checkbox} alt="checkbox" />
                <p>
                  Wireframing application structure and prototyping user
                  interface in both mobile and desktop sizes.
                </p>
              </li>
            </ul>
          </li>
          <li className="work-list-item">
            <h2 className="work-subtitle">EM:RAP Urgent Care</h2>
            <p className="work-description">
              The aim of this project was to create a branded sub section for
              their Urgent Care audio program.
            </p>
            <div className="work-summary">
              <p>
                <strong>Role:</strong> Lead Designer
              </p>
              <p>
                <strong>Duration:</strong> 12 weeks
              </p>
            </div>
            <ul className="work-list-points">
              <li className="work-list-points-item">
                <img className="work-checkbox" src={checkbox} alt="checkbox" />
                <p>
                  Meeting and brainstorming with key people to capture vision
                  and goals.
                </p>
              </li>
              <li className="work-list-points-item">
                <img className="work-checkbox" src={checkbox} alt="checkbox" />
                <p>
                  Creating mood boards, mockups and building a component based
                  design library and style guide.
                </p>
              </li>
              <li className="work-list-points-item">
                <img className="work-checkbox" src={checkbox} alt="checkbox" />
                <p>
                  Designing responsive pages, prototyping interactive actions
                  and leading meetings with client and developers to present
                  design, library components and interactive elements.
                </p>
              </li>
            </ul>
          </li>
          <li className="work-list-item">
            <h2 className="work-subtitle">Board Member for silverorange</h2>
            <p className="work-description">
              The aim of the board was to oversee and advise the company so it
              functions as effectively as possible.
            </p>
            <div className="work-summary">
              <p>
                <strong>Duration:</strong> 5 years
              </p>
            </div>
            <ul className="work-list-points">
              <li className="work-list-points-item">
                <img className="work-checkbox" src={checkbox} alt="checkbox" />
                <p>
                  Reviewing current and future work contracts to strategically
                  plan for financial risks.
                </p>
              </li>
              <li className="work-list-points-item">
                <img className="work-checkbox" src={checkbox} alt="checkbox" />
                <p>
                  Participating in hiring interviews and evaluation of Lead
                  Designer, Project Manager, Developers, Human Resource
                  Coordinator and Chief Financial Officer.
                </p>
              </li>
              <li className="work-list-points-item">
                <img className="work-checkbox" src={checkbox} alt="checkbox" />
                <p>
                  Advocate for HR handbook, fair employee culture and welfare
                  while staying on track with company mission and philosophy.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Work;
