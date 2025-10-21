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
              From my roots in <strong>Front-End Development</strong> to serving
              on the <strong>board of a software agency</strong> and working as
              a <strong>consultant</strong>, I’ve consistently pursued my
              passion for <strong>building software products</strong> that are
              thoughtful, scalable, and user-centered.
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
          <p>
            I collaborate with clients through <strong>deep exploration</strong>{" "}
            to align <strong>design with business goals</strong>. By{" "}
            <strong>researching users</strong> and identifying{" "}
            <strong>pain points</strong>, I translate ideas into{" "}
            <strong>wireframes</strong> that solve core challenges and support{" "}
            <strong>strategic objectives</strong>. My consulting helps{" "}
            <strong>startups integrate design with business strategy</strong>{" "}
            for <strong>lasting impact</strong>.
          </p>
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
          <p>
            I transform ideas into <strong>intuitive interfaces</strong> and{" "}
            <strong>scalable systems</strong>, integrating{" "}
            <strong>reusable UI patterns</strong> for efficiency. Through close{" "}
            <strong>collaboration with developers</strong>, I ensure{" "}
            <strong>seamless integration</strong> and continuously refine
            solutions to enhance <strong>usability</strong>. From{" "}
            <strong>research and wireframes</strong> to{" "}
            <strong>prototypes and design systems</strong>, I craft user
            experiences that balance{" "}
            <strong>aesthetics and functionality</strong>.
          </p>
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
          <p>
            With over a decade in <strong>web development</strong>, I’ve led
            projects from <strong>inception to completion</strong>—across
            startups, agencies, and large teams. I’ve{" "}
            <strong>led development teams</strong>, facilitated{" "}
            <strong>design sprints</strong>, and managed{" "}
            <strong>timelines and budgets</strong>. Serving as a{" "}
            <strong>board member</strong> has given me a{" "}
            <strong>strategic, big-picture perspective</strong> that informs how
            I deliver <strong>cohesive, impactful solutions</strong>. I thrive
            on helping <strong>businesses succeed</strong>.
          </p>
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
