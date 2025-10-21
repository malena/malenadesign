import "./Home.css";
import Testimonials from "./Testimonials";
import ProjectSlider from "../components/ProjectSlider";
import ideas from "./../images/home-ideas.png";
import interview from "./../images/home-interview.png";
import bridge from "./../images/home-bridge.png";
import hero from "./../images/home-hero.png";

function Home() {
  return (
    <div class="home">
      <section className="home-main-section">
        <div className="home-content">
          <div className="home-content-container">
            <h3 className="title-label">HI. I'M A</h3>
            <h1 className="home-title">UX Designer.</h1>
            <p className="home-description">
              From my roots in Front-End Development to serving on the board of
              a software agency and working as a consultant, I've always been
              passionate about building software products.
            </p>
          </div>
          <img className="bringing-ideas" src={hero} alt="logo" />
        </div>
      </section>
      <section className="container home-container">
        <h4>What I Do</h4>
        <h2 className="home-subtitle">
          <strong>BRINGING IDEAS TO LIFE</strong>
          through thoughtful design.
        </h2>
        <div className="content-image-container">
          <ul className="bullet-list">
            <li>
              Collaborate with clients to align design with their business goals
            </li>
            <li>Conduct deep exploration to understand vision and strategy</li>
            <li>
              Research users and identify pain points to guide design decisions
            </li>
            <li>
              Translate concepts into wireframes that solve core challenges
            </li>
            <li>
              Support startups by integrating design with business strategy for
              lasting impact
            </li>
          </ul>
          <img className="bringing-ideas" src={interview} alt="logo" />
        </div>
      </section>
      <section className="container home-container">
        <h4>How I Work</h4>
        <h2 className="home-subtitle">
          <strong>A STRUCTURED</strong>
          user-centered design approach.
        </h2>
        <div className="content-image-container">
          <ul className="bullet-list">
            <li>
              Transform ideas into intuitive interfaces and scalable systems
            </li>
            <li>Integrate reusable UI patterns to boost efficiency</li>
            <li>
              Collaborate closely with developers for seamless implementation
            </li>
            <li>Continuously refine solutions to enhance usability</li>
            <li>
              Deliver end-to-end design: research, wireframes, prototypes, and
              design systems
            </li>
            <li>
              Balance aesthetics with functionality to create impactful user
              experiences
            </li>
          </ul>
          <img className="bringing-ideas" src={ideas} alt="logo" />
        </div>
      </section>
      <section className="container home-container">
        <h4>My Strength</h4>
        <h2 className="home-subtitle">
          <strong>BRIDGING BOTH WORLDS</strong>
          of development and design.
        </h2>
        <div className="content-image-container">
          <ul className="bullet-list">
            <li>Over a decade of experience in web development</li>
            <li>Led development teams and facilitated design sprints</li>
            <li>
              Managed timelines, budgets, and cross-functional collaboration
            </li>
            <li>Worked with small teams, large agencies, and startups</li>
            <li>
              Served as a board member, gaining strategic business insight
            </li>
            <li>Deliver cohesive solutions by seeing the bigger picture</li>
          </ul>
          <img className="bringing-ideas" src={bridge} alt="logo" />
        </div>
      </section>
      <Testimonials />
      <section className="container cases-project-slider">
        <h4>Case Studies:</h4>
        <ProjectSlider currentSlide={0} />
      </section>
    </div>
  );
}

export default Home;
