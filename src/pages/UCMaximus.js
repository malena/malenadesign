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
              Goal was to design a branded microsite for UC Maximus, a medical
              education program tailored for Urgent Care Physicians. The
              challenge was to ensure the design felt distinct for this audience
              while still aligning with the playful, branded aesthetic of the
              parent website EM:RAP, which catered to Emergency Medicine
              Physicians.
            </p>
            <p>
              The client was highly engaged in the process, bringing extensive
              knowledge of the target audience and a clear vision for the
              project including their in-house illustrator. My role was to
              provide branding creative direction, develop compelling copy and
              ensure a successful launch as a lead developer.
            </p>
          </div>
          <ProjectSummaryBox items={projectBox} />
        </div>
        <div className="cases-overview-container">
          <div className="cases-content">
            <h3 className="cases-subtitle">Problem</h3>
            <p>
              Medical education platforms often share a uniform, corporate
              aesthetic. To break this mold, the client embraced a design
              approach that is goofy, fun, yet still educational and inspiring.
            </p>
            <p>
              When introducing a new educational program, they wanted it to have
              its own distinct personality and mini universe, while staying true
              to the playful, branded vibe of the parent website. They wanted to
              ensure the program stood out visually while maintaining a cohesive
              identity within the platform.
            </p>
          </div>
          <div className="cases-content">
            <h3 className="cases-subtitle">Solution</h3>
            <p>
              Build a modern and visually striking design, using bold colors,
              gradients and transparencies to create an immersive, space-like
              feel while using illustrations to align with the brand's
              aesthetic, maintaining consistency and visual appeal. Ensuring a
              sub-menu design to set it apart from the main header without
              creating a stacked effect, to ensure a seamless navigation
              experience.
            </p>
            <p>
              Structuring the layout in a clear way to highlight main sections
              including podcasts, video courses, conferences, and clinical
              reference tools, using strong call-to-action buttons like "Join
              Community Now" and "Subscribe Now" to ensure easy engagement.
              Highlighting expert faculty profiles to reinforce credibility.
              Overall effectively balancing aesthetics with functionality,
              inviting users to explore and connect.
            </p>
          </div>
        </div>
      </section>
      <section className="container case-steps">
        <div className="case-steps-container">
          <h4 className="title-label">Step 1</h4>
          <h2 className="home-subtitle">Research</h2>
          <p>
            I held several meetings with the client, including the Chief
            Technology Officer, Chief Executive Officer (a Medical Professor and
            EM Physician), and the Chief Product Officer (an EM Physician).
            Their medical expertise provided valuable insight into the specific
            audience they aimed to reach with this new program. Urgent Care
            Physicians occupy a distinct space within hospitals, and the
            microsite needed to reflect that uniqueness in both design and
            messaging.
          </p>
          <div className="case-steps-content">
            <h4>Target Audience</h4>
            <div className="cases-flex cases-target-audience">
              <div>
                <p>
                  I needed to gain a clear understanding of Urgent Care
                  Physicians and how they differ from Emergency Physicians.
                </p>
                <p>
                  During meetings, we explored these distinctions in depth, and
                  I carefully noted each perspective. It was essential to grasp
                  the unique insights and opinions of everyone involved to
                  ensure an accurate and effective approach.{" "}
                </p>
                <p className="float">
                  With my own research I gained insight into the the urgent care
                  market which had been growing, with an estimated 8,000 to
                  10,000 centers across the US. This growth was partly due to a
                  shortage of primary care physicians and a need for convenient
                  access to healthcare. 
                </p>
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
            <p className="cases-column">
              I wanted to convey the message of professional growth,
              collaboration, and accessibility in the field of urgent care
              education. A stylized illustration of a doctor's face wearing
              glasses and a mask for a more serious tone, set against a cosmic
              background with stars added depth and the interconnected icons
              suggest an evolving, interconnected community where healthcare
              professionals can continuously expand their knowledge. The colors
              I chose—teal and violet—help establish a tone of trust,
              innovation, and expertise, differentiating urgent care from the
              more intense emergency medicine themes of reds and oranges. My
              goal was to create a hero design that represented urgent care
              education as dynamic, supportive, and forward-thinking, appealing
              to healthcare providers looking to enhance their skills while
              staying connected with peers, aspects that would help increase
              subscriptions to the new program UX Maximus.
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
