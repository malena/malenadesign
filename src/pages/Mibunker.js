import "./CaseStudies.css";
import "./Mibunker.css";
import QuoteBox from "../components/QuoteBox";
import ProjectSlider from "../components/ProjectSlider";
import Tags from "../components/Tags";
import ProjectSummaryBox from "../components/ProjectSummaryBox";
import mibunkerLarge from "./../images/mibunkerLarge.png";
import survey from "./../images/mibunker-survey.gif";
import brainstorming from "./../images/mibunker-brainstorming.png";
import personas from "./../images/mibunker-personas.png";
import wireframing from "./../images/mibunker-wireframing.png";
import mibunkerPrototype from "./../images/mibunkerPrototype.png";
import sofi from "./../images/sofi.png";

const casesTags = [
  "Construction",
  "Startup",
  "User Research",
  "Branding",
  "App Design",
  "Product Management",
];

const projectBox = [
  {
    id: 1,
    title: "ROLE",
    description: "Product Manager, Product Designer, Researcher",
  },
  { id: 2, title: "TIMELINE", description: "16 Weeks" },
  { id: 3, title: "TOOLS", description: "Figma, FigJam, Illustrator, Zoom" },
  {
    id: 4,
    title: "TEAM",
    description:
      "Co-founder - Geotechnical Engineer, Co-founder - Public Works Engineer",
  },
  { id: 5, title: "LANGUAGE", description: "Spanish" },
];

const intervieweeTags = ["Introverted", "Creative", "Empath"];

const techTags = ["iPhone", "Macbook", "Excel", "WhatsApp"];

const quoteBoxProblem = [
  {
    id: 1,
    className: "challenges-quote",
    description:
      "While it provided a functional representation of key features, further iterations and user testing would have helped refine usability, validate assumptions, and ensure alignment with industry needs. Moving forward, structured feedback sessions and targeted testing could enhance the app's development, strengthening its value proposition for both users and investors.",
  },
];

function Mibunker() {
  return (
    <div class="cases">
      <section className="container cases-header">
        <h2 className="cases-title">miBunker</h2>
        <div className="cases-image-container">
          <img
            className="cases-image"
            src={mibunkerLarge}
            alt="miBunker App"
          ></img>
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
              I was approached by the <strong>startup co-founders</strong> to
              help kickstart their project. With{" "}
              <strong>no prior app development experience</strong>, they needed
              guidance turning their concept into a{" "}
              <strong>functional prototype</strong>. Working within a{" "}
              <strong>tight timeline and budget</strong>, the goal was to{" "}
              <strong>assess feasibility</strong>,{" "}
              <strong>establish costs</strong>, and deliver a{" "}
              <strong>tangible prototype</strong> for{" "}
              <strong>investor presentations</strong>.
            </p>
          </div>
          <ProjectSummaryBox
            className={"project-box-mibunker"}
            items={projectBox}
          />
        </div>
        <div className="cases-overview-container">
          <div className="cases-content">
            <h3 className="cases-subtitle">Problem</h3>
            <h4>Challenges in the Construction Industry</h4>
            <ul className="bullet-list">
              <li>
                Projects are often managed offline using physical documents
              </li>
              <li>
                Documents frequently become outdated, disorganized, or lost
              </li>
              <li>
                Tracking responsibilities and progress is difficult—especially
                with multiple parties involved
              </li>
              <li>
                Professionals rely heavily on word-of-mouth recommendations
              </li>
              <li>
                No reliable system exists to verify professional credibility
              </li>
              <li>
                Creates challenges for professionals seeking collaborators
              </li>
              <li>Property owners struggle to find and vet skilled experts</li>
            </ul>
          </div>
          <div className="cases-content">
            <h3 className="cases-subtitle">Solution</h3>
            <h4>miBunker Mobile App</h4>
            <ul className="bullet-list">
              <li>Comprehensive mobile app for construction professionals</li>
              <li>Connect, collaborate, and share with industry experts</li>
              <li>Fosters networking and long-term partnerships</li>
              <li>Simplifies document storage and sharing</li>
              <li>Ensures vital project files are always accessible</li>
              <li>Includes tools to find and organize project information</li>
              <li>
                Enhances efficiency from start to finish—right from your phone
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
            I first talked in depth with my team, the co-founders. Since they
            both have backgrounds in the construction industry, they were my
            biggest source of information. They also had the vision, knowledge
            and perspective that I needed to understand the audience for
            miBunker. I then followed with my own research of the industry,
            competition, and the audience.
          </p>
          <div className="case-steps-content">
            <h4 className="title-label">Competition</h4>
            <p>
              We found that many apps addressed specific aspects of the problem
              we aimed to solve. However, integrating legal documentation,
              professional networking, and intuitive document management into a
              single app could fill a unique gap in the market. Additionally,
              most competing apps were designed for a North American audience,
              with no direct competitors in the Latin American market.
            </p>
            <div className="cases-boxes">
              <div className="cases-gray-box">
                <h5>PROCORE</h5>
                <p>
                  Focuses on construction project management, including document
                  sharing and collaboration, but doesn't emphasize finding
                  credible professionals.
                </p>
              </div>
              <div className="cases-gray-box">
                <h5>LETSBUILD</h5>
                <p>
                  Offers tools for managing construction workflows and
                  documentation but lacks features for legal documentation or
                  professional networking.
                </p>
              </div>
              <div className="cases-gray-box">
                <h5>CONSTRUCT</h5>
                <p>
                  A collaborative app for real-time project updates and task
                  management, but it doesn't specifically address legal
                  documentation or professional credibility.
                </p>
              </div>
            </div>
          </div>
          <div className="case-steps-content">
            <h4 className="title-label">Interviews</h4>
            <p>
              I composed a script to run a video interview with professionals in
              the construction industry. The idea was to ask key questions to
              understand user needs, goals and pain points. One of the
              interviews I conducted via a video call was with an Architectural
              Designer.
            </p>
            <div className="case-interview-container cases-flex">
              <div className="case-interview">
                <div className="interview-profile-container">
                  <img
                    className="interview-profile"
                    height="120"
                    width="120"
                    src={sofi}
                    alt="Sofi"
                  />
                  <div className="case-interview-user-profile">
                    <h5>Sofi Buitron Obando</h5>
                    <p>Architectural Designer</p>
                    <p>Cotacachi, Ecuador</p>
                    <p>35, married, 1 child</p>
                  </div>
                </div>
                <div>
                  <Tags items={intervieweeTags} />
                  <div className="case-interview-user-description">
                    <p>
                      After the pandemic, she got used to working remotely with
                      her clients and colleagues. She wants to continue working
                      this way and have more time with her son.
                    </p>
                    <p>
                      She has difficulties with organization mainly because most
                      of her work is done through WhatsApp, which she uses for
                      communication, document sharing, and photographs.
                    </p>
                    <p>
                      It's also challenging to track progress because
                      conversations get lost, or even shared images or updated
                      documents are sometimes not available for download.
                      Occasionally, specific documents are shared across
                      different channels, making it complicated to know where
                      things are.
                    </p>
                  </div>
                </div>
                <div>
                  <h5>Tech</h5>
                  <Tags items={techTags} />
                </div>
              </div>
              <div className="case-interview">
                <h3 className="case-quotes-large">
                  “A big challenge is coordinating schedules between peers.”
                </h3>
                <div className="case-interview-bullet-list">
                  <h5>Needs</h5>
                  <ul>
                    <li>Organization of documents and photos.</li>
                    <li>Better way to schedule meetings.</li>
                    <li>Supplier database with locations in the area.</li>
                  </ul>
                </div>
                <div className="case-interview-bullet-list">
                  <h5>Goals</h5>
                  <ul>
                    <li>Be more organized.</li>
                    <li>Find more projects to include in her portfolio.</li>
                    <li>Work remotely.</li>
                  </ul>
                </div>
                <div className="case-interview-bullet-list">
                  <h5>Pain Points</h5>
                  <ul>
                    <li>Connectivity issues during audio or video calls.</li>
                    <li>
                      Difficulties organizing photos related to project
                      tracking, which results in them getting lost in the
                      process.
                    </li>
                    <li>
                      Not having updated costs or documentation from the
                      municipality because everything changes very frequently.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="case-steps-content">
            <h4 className="title-label">Surveys</h4>
            <div className="cases-flex">
              <div>
                <ul className="bullet-list">
                  <li>
                    Developed a set of questions for construction trade show
                    attendees
                  </li>
                  <li>
                    Gathered insights on current use of tools, apps, and
                    specific pain points
                  </li>
                  <li>
                    Offered survey access in person and via QR code for mobile
                    convenience
                  </li>
                  <li>
                    Displayed demo on a phone and used a large banner to promote
                    the brand
                  </li>
                  <li>
                    Positioned booth at the trade show entrance to maximize
                    visibility
                  </li>
                  <li>
                    Encouraged participation with a raffle gift certificate as a
                    thank-you
                  </li>
                  <li>
                    Certificate redeemable at a participating booth within the
                    trade show
                  </li>
                  <li>Interviewed 30 attendees with a 90% approval rate</li>
                </ul>
              </div>
              <img src={survey} alt="Survey" />
            </div>
          </div>
        </div>
      </section>
      <section className="container case-steps">
        <div className="case-steps-container">
          <h4 className="title-label">Step 2</h4>
          <h2 className="home-subtitle">Design</h2>
          <p>
            Based on user research, I helped define the app’s{" "}
            <strong>core features</strong>. While the client initially
            envisioned a document storage system, our findings showed users
            prioritized <strong>photo capture with GPS</strong>,{" "}
            <strong>offline organization</strong>, and{" "}
            <strong>access to industry resources</strong>.
          </p>
          <p>
            A major pain point was{" "}
            <strong>connecting with skilled professionals</strong>—not just
            managing documents, but{" "}
            <strong>seamlessly exchanging files and images</strong> during
            construction projects.
          </p>
          <p>
            I <strong>collaborated closely with the client</strong> to align
            features with real workflows. We ultimately focused on three
            essentials: <strong>project creation</strong>,{" "}
            <strong>photo capture and categorization</strong>, and{" "}
            <strong>
              access to construction resources and professional connections
            </strong>
            .
          </p>
          <div className="case-steps-content">
            <h4 className="title-label">Brainstorming</h4>
            <p>
              I used <strong>affinity mapping</strong> to structure information
              and findings more clearly. This helped the client{" "}
              <strong>identify hidden patterns and connections</strong>, and
              served as a{" "}
              <strong>collaborative tool for decision-making</strong>.
            </p>
            <img src={brainstorming} alt="Affinity Map" />
          </div>
          <div className="case-steps-content">
            <h4 className="title-label">Personas</h4>
            <p className="cases-personas">
              As the primary source of industry knowledge, the client was
              assigned tasks to develop personas they could emotionally connect
              with. This approach enabled them to put themselves in the users'
              shoes, gaining deeper insights into their specific needs more
              effectively.
            </p>
            <p>
              I carefully organized the provided information into structured
              cards, offering a clearer view of the app's target audience and
              making it easier to review each persona. During discussions, we
              analyzed their key pain points using insights from interviews,
              surveys, general research, and personal experiences.
            </p>
            <img src={personas} alt="Personas" />
          </div>
          <div className="case-steps-content">
            <h4 className="title-label">Features</h4>
            <p>
              This is where my background as a developer helped the client. I
              began listing all the possible features that the app could have,
              sorting them by most important to least important.
            </p>
            <div className="tag-container">
              <ul className="cases-tags">
                <li>Professional Profile</li>
                <li>Supplier Profile</li>
                <li>Costing Documents</li>
                <li>Government Documentation</li>
                <li>Upload Documents</li>
                <li>Upload Pictures</li>
                <li>Share Documents</li>
                <li>Professional Ratings</li>
                <li>Notifications</li>
                <li>Feed</li>
                <li>Statistics Reports</li>
                <li>Versioning of Documents</li>
                <li>Multi-User</li>
                <li>Account Creation</li>
                <li>Dashboard</li>
                <li>User Profile</li>
                <li>Subscription</li>
                <li>Payment</li>
                <li>Search</li>
                <li>Tutorials</li>
                <li>Digital Certifications</li>
                <li>Online Courses</li>
                <li>Automated Project Proposals</li>
              </ul>
            </div>
          </div>
          <div className="case-steps-content">
            <h4 className="title-label">Wireframing</h4>
            <p className="cases-flex">
              These wire frames were specifically made to tackle the user flow,
              identifying the main functions of the app narrowing down the scope
              as the project progressed. It’s easy to start building everything,
              but since we were on a tight timeline, the wire frames were
              happening at the same time as more research and information was
              gathered.
              <img src={wireframing} alt="Wireframing" />
            </p>
          </div>
          <div className="case-steps-content">
            <h4 className="title-label">Prototyping</h4>
            <p>
              This is a first draft of a design direction, taking inspiration
              from the branding guide I was also in charge of creating for this
              project. This allowed me to quickly draft a mock up, and create a
              simple prototype to navigate between the three main features.
            </p>
            <img src={mibunkerPrototype} alt="miBunker Prototype" />
          </div>
        </div>
      </section>
      <section className="container case-steps">
        <div className="case-steps-container">
          <h4 className="title-label">Step 3</h4>
          <h2 className="home-subtitle">Reflection</h2>
          <p>
            Unfortunately, I did not have the opportunity to conduct further
            testing. The prototype served as the final demo, acting as both a
            tool for gathering additional feedback and a potential asset for
            attracting investors to the project.
          </p>
          <p></p>
          <QuoteBox items={quoteBoxProblem} />
        </div>
      </section>
      <section className="container cases-project-slider">
        <div className="next-project-slider">
          <h4>Next Project:</h4>
          <ProjectSlider currentSlide={1} />
        </div>
      </section>
    </div>
  );
}

export default Mibunker;
