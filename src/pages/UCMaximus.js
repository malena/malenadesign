import { Link } from "react-router-dom";
import "./CaseStudies.css";
import "./UCMaximus.css";
import ProjectSlider from "../components/ProjectSlider";
import Tags from "../components/Tags";
import ProjectSummaryBox from "../components/ProjectSummaryBox";
import QuoteBox from "../components/QuoteBox";
import ucmaximusLarge from "./../images/ucmaximusLarge.png";
import ucWireframes from "./../images/uc-wireframes.gif";
import ucIdeation from "./../images/uc-ideation.png";
import ucIterations from "./../images/uc-iterations.png";
import ucPrototyping from "./../images/uc-prototyping.png";
import ucComponents from "./../images/uc-components.gif";
import ucCoding from "./../images/uc-coding.png";
import ucTesting from "./../images/uc-testing.png";
import sofi from "./../images/sofi.png";

const casesTags = [
  "Medical Education",
  "Branding",
  "Responsive Web Design",
  "Front End Development",
];

const keywords = [
  "Inspiring",
  "Innovative",
  "Forefront",
  "Inventive",
  "Complete",
  "Concise",
  "Ingenious",
  "Essential",
  "To the point",
];

const projectBox = [
  {
    id: 1,
    title: "ROLE",
    description: "Web Designer, Front End Developer",
  },
  { id: 2, title: "TIMELINE", description: "7 months" },
  { id: 3, title: "TOOLS", description: "Figma, Illustrator, Visual Studio" },
  {
    id: 4,
    title: "TEAM",
    description: "Project Manager, Back End Developer",
  },
];

const quoteBoxScott = [
  {
    id: 1,
    src: sofi,
    alt: "Scott Kobner Quote",
    title: "Scott Kobner",
    subtitle: "Chief Product Officer",
    description:
      "Urgent Care is a largely privatized space in medicine, and it is seen as a step-child of emergency medicine. Some aspects of Urgent Care are luxury, concierge medicine with expensive office spaces and elite clients. Other aspects of urgent care are small clinics in shopping malls.",
  },
];

const quoteBoxRyan = [
  {
    id: 2,
    src: sofi,
    alt: "Ryan Moehring",
    title: "Ryan Moehring",
    subtitle: "Chief Technology Officer",
    description:
      "The web page needs to feel like their own universe that is embedded within the larger EM:RAP multiverse. This will be increasingly important as we expand into different specialties and more personalized ’portal’ experiences.",
  },
];

function UCMaximus() {
  return (
    <div class="cases">
      <header className="container projects-container-header">
        <h4 className="title-label">
          <Link to="/projects">
            Projects
          </Link>
        </h4>
      </header>
      <section className="container cases-header">
        <h2 className="cases-title">UC Maximus</h2>
        <div className="cases-image-container">
          <img
            className="cases-image"
            src={ucmaximusLarge}
            alt="Urgent Care: Maximus"
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
              Designed a <strong>branded microsite</strong> for{" "}
              <strong>UC Maximus</strong>, a medical education program for{" "}
              <strong>Urgent Care Physicians</strong>. The challenge: make it
              feel <strong>distinct for this audience</strong> while staying
              aligned with the <strong>playful aesthetic</strong> of the parent
              site, <strong>EM:RAP</strong>.
            </p>
            <p>
              The client was <strong>highly engaged</strong>, bringing deep
              audience insight and a clear creative vision—including their{" "}
              <strong>in-house illustrator</strong>.
            </p>
            <p>
              My role: provide <strong>branding creative direction</strong>,
              craft <strong>compelling copy</strong>, and lead the{" "}
              <strong>successful launch</strong> as{" "}
              <strong>lead developer</strong>.
            </p>
          </div>
          <ProjectSummaryBox className={"project-box-uc"} items={projectBox} />
        </div>
        <div className="cases-overview-container">
          <div className="cases-content">
            <h3 className="cases-subtitle">Problem</h3>
            <ul className="bullet-list">
              <li>
                Medical education platforms often share a uniform, corporate
                aesthetic
              </li>
              <li>
                Client wanted to break the mold with a design that is{" "}
                <strong>goofy, fun, educational, and inspiring</strong>
              </li>
              <li>
                New educational program needed its own{" "}
                <strong>distinct personality and mini universe</strong>
              </li>
              <li>
                Design had to stay true to the{" "}
                <strong>playful, branded vibe</strong> of the parent website
              </li>
              <li>
                Goal: make the program <strong>stand out visually</strong> while
                maintaining a <strong>cohesive identity</strong> within the
                platform
              </li>
            </ul>
          </div>
          <div className="cases-content">
            <h3 className="cases-subtitle">Solution</h3>
            <ul className="bullet-list">
              <li>
                Built a <strong>modern and visually striking design</strong>{" "}
                using bold colors, gradients, and transparencies
              </li>
              <li>
                Created an <strong>immersive, space-like feel</strong> with
                illustrations aligned to the brand’s aesthetic
              </li>
              <li>
                Designed a <strong>distinct sub-menu</strong> to separate
                navigation from the main header and avoid stacking
              </li>
              <li>
                Structured layout to highlight key sections:
                <ul>
                  <li>Podcasts</li>
                  <li>Video courses</li>
                  <li>Conferences</li>
                  <li>Clinical reference tools</li>
                </ul>
              </li>
              <li>
                Used strong call-to-action buttons like{" "}
                <strong>"Join Community Now"</strong> and{" "}
                <strong>"Subscribe Now"</strong> for easy engagement
              </li>
              <li>
                Highlighted <strong>expert faculty profiles</strong> to
                reinforce credibility
              </li>
              <li>
                Balanced <strong>aesthetics with functionality</strong> to
                invite exploration and connection
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
            Held strategic meetings with the{" "}
            <strong>Chief Technology Officer</strong>,{" "}
            <strong>Chief Executive Officer</strong> (Medical Professor & EM
            Physician), and <strong>Chief Product Officer</strong> (EM
            Physician). Their <strong>medical expertise</strong> offered
            valuable insight into the <strong>target audience</strong>:{" "}
            <strong>Urgent Care Physicians</strong>, who occupy a{" "}
            <strong>distinct role within hospitals</strong>. The microsite
            needed to reflect that{" "}
            <strong>uniqueness in both design and messaging</strong>.
          </p>
          <div className="case-steps-content">
            <h4>Target Audience</h4>
            <div className="cases-flex cases-target-audience">
              <div>
                <ul className="bullet-list">
                  <li>
                    Focused on understanding{" "}
                    <strong>Urgent Care Physicians</strong> and how they differ
                    from <strong>Emergency Physicians</strong>
                  </li>
                  <li>
                    Held meetings to explore these distinctions and{" "}
                    <strong>gather diverse perspectives</strong>
                  </li>
                  <li>
                    Prioritized <strong>unique insights and opinions</strong> to
                    guide design and messaging
                  </li>
                  <li>
                    Conducted independent research on the{" "}
                    <strong>growing urgent care market</strong>
                  </li>
                  <li>
                    Found an estimated <strong>8,000 to 10,000 centers</strong>{" "}
                    across the U.S.
                  </li>
                  <li>
                    Growth driven by <strong>primary care shortages</strong> and
                    demand for <strong>convenient healthcare access</strong>
                  </li>
                </ul>
              </div>
              <QuoteBox items={quoteBoxScott} />
            </div>
          </div>
          <div className="case-steps-content">
            <h4>Objectives</h4>
            <p>
              I requested the client to provide summarized descriptions,
              keywords, analogies, and images to support the design process.
              Together, we collaborated to define the objectives of each page,
              ensuring alignment with the overall personality and tone of UC
              Maximus.
            </p>
            <div className="case-steps-first-section">
              <div className="case-bullet-list-container">
                <h5>UC PERSONALITY / TONE</h5>
                <ul className="case-bullet-list">
                  <li>Urgent Care community and universe</li>
                  <li>A realm specifically for Urgent Care Physicians</li>
                  <li>Port key window looking into another realm</li>
                  <li>Personalized experience</li>
                  <li>UC Doctors NPs/PA’s not EM providers</li>
                  <li>Superior</li>
                </ul>
              </div>
              <div className="case-bullet-list-container">
                <h5>OBJECTIVE OF SALES PAGE</h5>
                <ul className="case-bullet-list">
                  <li>Subscribe to Urgent Care</li>
                  <li>Download the App</li>
                  <li>Show what we offer; Podcasts, Courses, Conferences</li>
                  <li>A site you can share with others</li>
                  <li>
                    Navigation needs to be clearly for UC, distinct from top
                    menu
                  </li>
                </ul>
              </div>
              <div className="case-bullet-list-container">
                <h5>OBJECTIVE OF FEED PAGE</h5>
                <ul className="case-bullet-list">
                  <li>Finding relevant Urgent Care information</li>
                  <li>Seeing our monthly podcast is key</li>
                  <li>Finding other conferences and courses</li>
                  <li>See other EM:RAP content but not be overwhelmed</li>
                </ul>
              </div>
            </div>
            <div className="case-testimonials">
              <QuoteBox items={quoteBoxRyan} />
              <Tags items={keywords} />
            </div>
          </div>
        </div>
      </section>
      <section className="container case-steps">
        <div className="case-steps-container">
          <h4 className="title-label">Step 2</h4>
          <h2 className="home-subtitle">Design</h2>
          <div className="cases-overview-container">
            <p>
              Designed a hero image to convey{" "}
              <strong>
                professional growth, collaboration, and accessibility
              </strong>{" "}
              in urgent care education. Used a{" "}
              <strong>stylized doctor illustration</strong> with a serious tone,
              set against a <strong>cosmic background</strong> to suggest an{" "}
              <strong>evolving, connected community</strong>. Chose{" "}
              <strong>teal and violet</strong> to evoke{" "}
              <strong>trust, innovation, and expertise</strong>, setting urgent
              care apart from the intense reds of emergency medicine. The goal
              was a{" "}
              <strong>dynamic, supportive, and forward-thinking design</strong>{" "}
              that appeals to healthcare providers and supports{" "}
              <strong>UX Maximus subscriptions</strong>.
            </p>
          </div>
          <div className="case-steps-content">
            <h4>Wireframes</h4>
            <p className="cases-brainstorming">
              I defined the structure and hierarchy, mapping out the flow and
              interactions, crafting preliminary text, and collaborating with
              the client to ensure alignment on goals and functionality. This
              process kept the focus on usability, prioritizing features,
              navigation, and user experience before developing high-resolution
              mock-ups.
            </p>
            <img src={ucWireframes} alt="UC Wireframes" />
          </div>
          <div className="case-steps-content case-ideation">
            <h4>Ideation</h4>
            <div className="cases-flex">
              <p>
                I initiated the visual design process by creating multiple mood
                boards informed by key words to showcase colors, imagery,
                illustrations and fonts, indicating the general vibe. I also
                presented a sample mock-up of the hero section along with the
                mood-board for a better reference which was more useful to the
                client in order to establish the visual direction.
              </p>
              <img src={ucIdeation} alt="UC Ideation" />
            </div>
          </div>
          <div className="case-steps-content">
            <h4>Component Library</h4>
            <div className="cases-flex">
              <img src={ucComponents} alt="UC Components" />
              <div>
                <p>
                  Due to my front-end development background, as I design I
                  start to build a component library in Figma, which allows me
                  to automate global edits being more efficient, as I continue
                  designing.
                </p>
                <p>
                  This library also becomes the foundation of the component
                  library we create in react.js once we start coding.
                </p>
              </div>
            </div>
          </div>
          <div className="case-steps-content">
            <h4>Iterations</h4>
            <p className="cases-flex">
              Once the design direction became clearer, I created full mock-ups
              of the layout incorporating essential design principles. I
              structured elements based on their importance and crafted text
              that effectively supported the goal of user sign-ups while
              aligning structurally with the design. Every feedback loop created
              an iteration closer to the final design.
              <img src={ucIterations} alt="UC Iderations" />
            </p>
          </div>
          <div className="case-steps-content">
            <h4>Prototyping &amp; Testing Interactivity</h4>
            <p>
              Once the visual design was more refined, I developed interactive
              elements and incorporated various states into the component
              library. This included defining hover, active, and disabled states
              in preparation for the development phase. At this stage,
              presentations shifted from static pages to prototype reviews,
              allowing for a more dynamic assessment of user flows and a client
              sign-off of the final product.
            </p>
            <img src={ucPrototyping} alt="UC Protoyping" />
          </div>
          <div className="case-steps-content">
            <h4>Coding</h4>
            <div className="cases-flex">
              <p>
                As a designer and front-end developer, I could efficiently dive
                into coding, bypassing design meetings since I already had the
                code structure in mind during the design process. My favorite
                JavaScript library is React.js, thanks to its component-based
                architecture and intuitive React Hooks. Styling components was
                the finishing touch—an aspect I’ve always enjoyed.
              </p>
              <img src={ucCoding} alt="UC Coding" />
            </div>
          </div>
        </div>
      </section>
      <section className="container case-steps">
        <div className="case-steps-container">
          <h4 className="title-label">Step 3</h4>
          <h2 className="home-subtitle">Testing</h2>
          <p>
            As a web designer, my role encompassed functional and interactive
            testing but did not extend to validating impressions, subscriptions,
            or assessing whether the website met its business objectives.
          </p>
          <div className="case-steps-content">
            <h4>Functional and Interface Testing Pre and Post Launch</h4>
            <p>
              Functional testing across devices, browsers, and screen sizes was
              conducted both manually—using physical devices and browsers—and
              automatically with a tool called BrowserStack. Throughout the
              project, I was responsible for logging issues, creating task
              cards, and either resolving them myself or assigning them to other
              developers. Once we reached a point of low-risk bugs, I worked
              with the back-end developer and project manager to launch UC
              Maximus live. The final steps of this phase was to conduct
              thorough testing on the live product, quickly address any issues
              and release changes immediately.
            </p>
            <img src={ucTesting} alt="UC Testing" />
          </div>
          <div className="case-steps-content">
            <h4>Post-Mortem Team Meeting</h4>
            <p>
              The final step of the project was a post-mortem meeting with the
              team. We recapped the project, identified successes and
              challenges, shared lessons learned, and discussed actionable
              improvements to enhance our workflows. It was also an opportunity
              to strengthen team connections, provide constructive feedback, and
              ensure a cohesive project wrap-up.
            </p>
          </div>
        </div>
      </section>
      <section className="container cases-project-slider">
        <div className="next-project-slider">
          <h4>Next Project:</h4>
          <ProjectSlider currentSlide={2} />
        </div>
      </section>
    </div>
  );
}

export default UCMaximus;
