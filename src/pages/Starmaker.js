import "./CaseStudies.css";
import "./Starmaker.css";
import QuoteBox from "../components/QuoteBox";
import ProjectSlider from "../components/ProjectSlider";
import ProjectSummaryBox from "../components/ProjectSummaryBox";
import Tags from "../components/Tags";
import personas from "./../images/starmaker-personas.png";
import benchmarking from "./../images/starmaker-user-flow-benchmarking.png";
import starmaker from "./../images/starmaker.png";
import wireframes from "./../images/starmaker-wireframes.png";
import uiLibrary from "./../images/starmaker-ui-library.png";
import prototype from "./../images/starmaker-prototype.png";

const quoteBoxProblem = [
  {
    id: 1,
    className: "challenges-quote",
    description:
      "I included this case study because of the complex obstacles encountered and the valuable insights gained through my time on this project. I led design efforts but the project was ultimately completed by a seperate team. - Malena Andrade",
  },
];

const quoteBoxDesign = [
  {
    id: 2,
    className: "challenges-quote",
    description:
      "Unfortunately, that flow was built around outdated UI technologies, and transitioning to modern approaches required a fundamental shift in how the experience was structured.  I failed to assert that a visual refresh alone wouldn’t solve the underlying issues. What was truly needed was a complete reimagining of the user experience.",
  },
];

const casesTags = [
  "Funding Website",
  "Submission Form",
  "UI Design Library",
  "Responsive Web Design",
];

const projectBox = [
  {
    id: 1,
    title: "ROLE",
    description: "UI designer",
  },
  { id: 2, title: "TIMELINE", description: "5 Months" },
  { id: 3, title: "TOOLS", description: "Figma, FigJam, Zoom" },
  {
    id: 4,
    title: "TEAM",
    description: "Back-End Developer",
  },
];

function Starmaker() {
  return (
    <div className="cases">
      <section className="container cases-header">
        <h2 className="cases-title">Starmaker</h2>
        <div className="cases-image-container">
          <img
            className="cases-image starmaker-image"
            src={starmaker}
            alt="Starmaker App"
          />
        </div>
        <div className="tag-container">
          <Tags items={casesTags} />
        </div>
      </section>
      <section className="container cases-overview">
        <div className="cases-overview-container cases-overview-content">
          <div className="cases-content">
            <h3 className="cases-subtitle">Overview of the project</h3>
            <p>
              I was brought in to lead a <strong>visual refresh</strong> for the{" "}
              <strong>Canadian Starmaker Fund</strong>, a platform supporting
              Canadian musicians through funding applications. The project had a{" "}
              <strong>tight timeline</strong>, <strong>limited research</strong>
              , and a <strong>fixed budget</strong>—all set before design began.
              Early coordination was challenging due to the{" "}
              <strong>absence of a project manager</strong> and a mismatch in
              expectations; while I was hired as a <strong>UI designer</strong>,
              the role required <strong>UX strategy and problem-solving</strong>
              . The client initially expected a simple update, but the scope
              evolved into a <strong>full-scale redesign</strong> and{" "}
              <strong>code base rebuild</strong>.{" "}
            </p>
          </div>
          <ProjectSummaryBox items={projectBox} />
        </div>
        <QuoteBox items={quoteBoxProblem} />
        <div>
          <div className="cases-content">
            <h3 className="cases-subtitle">Problem</h3>
            <ul className="bullet-list">
              <li>
                <strong>Lengthy and cumbersome application process</strong> with
                unclear requirements until submission
              </li>
              <li>
                Multiple steps and <strong>unreliable input fields</strong> that
                failed to save user data
              </li>
              <li>
                <strong>Frequent loss of information</strong> during submission
                due to outdated back-end architecture
              </li>
              <li>
                Website was <strong>desktop-only</strong>, excluding users who
                relied on <strong>mobile access</strong>
              </li>
            </ul>
          </div>
          <div className="cases-content">
            <h3 className="cases-subtitle">Solution</h3>
            <ul className="bullet-list">
              <li>
                <strong>Refactored back-end code</strong> by separating
                presentation logic from processing
              </li>
              <li>
                Integrated <strong>React.js</strong> for a more intuitive and
                modern user interface
              </li>
              <li>
                Implemented <strong>mobile-first responsive design</strong> to
                improve accessibility
              </li>
              <li>
                Enhanced application flow with:
                <ul>
                  <li>
                    <strong>Step-by-step progress indicators</strong> to reduce
                    cognitive load
                  </li>
                  <li>
                    <strong>Smart validation</strong> and{" "}
                    <strong>auto-save</strong> to prevent errors and data loss
                  </li>
                </ul>
              </li>
              <li>
                Established a <strong>clear visual hierarchy</strong> with
                tooltips and inline guidance for first-time users
              </li>
              <li>
                Applied <strong>user-centered information architecture</strong>{" "}
                for quick access to eligibility, deadlines, and FAQs
              </li>
              <li>
                Conducted <strong>iterative testing and user feedback</strong>{" "}
                via surveys and prototype reviews to refine the experience
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container case-steps">
        <div className="case-steps-container">
          <h4 className="title-label">Step 1</h4>
          <h2 className="home-subtitle">Research</h2>
          <p>
            To inform myself on form and submission platform designs, I
            conducted user flow benchmarking across leading artist funding
            platforms such as Kickstarter, Indiegogo, and Patreon. These
            platforms exemplify intuitive onboarding, progressive disclosure of
            information, and mobile-first design principles. This research
            helped identify best practices for reducing cognitive load,
            minimizing form abandonment, and ensuring data persistence.
          </p>
          <h4>User Flow Benchmarking</h4>
          <img
            className="starmaker-cases-image"
            src={benchmarking}
            alt="UC Coding"
          />
          <h4>Personas</h4>
          <div className="cases-flex">
            <img className="" src={personas} alt="UC Coding" />
            <div className="starmaker-personas-takeaways">
              <h5>Simplify onboarding:</h5>
              <p>
                Use progressive steps like Kickstarter to reduce cognitive load.
              </p>
              <h5>Offer flexible paths:</h5>
              <p>
                Like Indiegogo, allow users to save progress and return later.
              </p>
              <h5>Build community:</h5>
              <p>
                Emulate Patreon’s creator-centric model to foster long-term
                engagement.
              </p>
              <h5>Mobile-first design:</h5>
              <p>
                All three platforms prioritize responsive layouts—critical for
                modern users.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container case-steps">
        <div className="case-steps-container">
          <h4 className="title-label">Step 2</h4>
          <h2 className="home-subtitle">Design</h2>
          <p>
            Led a <strong>three-day in-person workshop</strong> with a back-end
            developer and the client to clarify{" "}
            <strong>feature expectations</strong> and walk through the{" "}
            <strong>current user flow</strong>. I prepared{" "}
            <strong>adaptable wireframes</strong> to streamline updates and
            ensure <strong>seamless collaboration</strong> across teams.
          </p>
          <QuoteBox items={quoteBoxDesign} />
          <strong></strong>
        </div>
        <h4>Wireframes</h4>
        <p>
          My initial strategy was to create wireframes of the existing user flow
          to better understand the project. From there, I gradually incorporated
          changes based on my research. However, as the project progressed, the
          scope expanded significantly, and the required updates became
          increasingly complex.
        </p>
        <img className="" src={wireframes} alt="Starmaker Wireframes" />
        <h4>UI Library</h4>
        <p>
          Using the existing branding and color palette, I began developing a UI
          library that could serve as an immediate foundation for the front-end
          component system. Designed as a plug-and-play resource, the library
          initially functioned as a placeholder to kickstart the creation of
          React.js components using consistent UI elements. Built entirely in
          Figma with reusable components and symbols, it allowed for easy
          updates and design iterations independent of the user flow.
        </p>
        <img className="" src={uiLibrary} alt="Starmaker UI Library" />
        <h4>Prototype</h4>
        <p>
          Due to the fast-paced nature of the project, I began building a
          prototype using the UI library while still refining the wireframes.
          Reviewing the prototype helped both our team and the client recognize
          the full complexity and scope of the work ahead. My role was to bring
          the design into a manageable state, paving the way for a visual
          designer to finalize the overall look and feel.
        </p>
        <img className="" src={prototype} alt="Starmaker Prototype" />
      </section>
      <section className="container case-steps">
        <div className="case-steps-container">
          <h4 className="title-label">Step 3</h4>
          <h2 className="home-subtitle">Reflection</h2>
          <p>
            My involvement in the project concluded after testing the prototype
            began, as the work was still in progress. To ensure continuity, I
            recorded several onboarding videos for the incoming designer. It was
            one of the projects with the most noticeable scope expansion over
            time.
          </p>
          <p>
            Looking back, being present during the initial client meetings could
            have helped anticipate the project's complexity. Investing more time
            in refining the user flow would have added significant value and
            created more education to the client that this was a bigger project
            than they though. That said, every project comes with its own
            constraints—whether in budget, timeline, or scope—and it's all part
            of the learning process.
          </p>
        </div>
      </section>
      <section className="container cases-project-slider">
        <div className="next-project-slider">
          <h4>Next Project:</h4>
          <ProjectSlider currentSlide={0} />
        </div>
      </section>
    </div>
  );
}

export default Starmaker;
