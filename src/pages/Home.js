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
        <h4>What do I do?</h4>
        <h2 className="home-subtitle">
          <strong>BRINGING IDEAS TO LIFE</strong>
          through thoughtful design.
        </h2>
        <div className="content-image-container">
          <p>
            Through deep exploration, I collaborate with clients to understand
            their vision and align design with their business goals. By
            researching users and identifying pain points, I translate concepts
            into wireframes that solve core challenges and drive strategic
            objectives. My consulting helps startups integrate design with
            business strategy for lasting impact.
          </p>
          <img className="bringing-ideas" src={interview} alt="logo" />
        </div>
      </section>
      <section className="container home-container">
        <h4>How do I work?</h4>
        <h2 className="home-subtitle">
          <strong>FOLLOWING A STRUCTURED</strong>
          user-centered approach to design.
        </h2>
        <div className="content-image-container">
          <p>
            I transform ideas into intuitive interfaces and scalable systems,
            integrating reusable UI patterns for efficiency. Through close
            collaboration with developers, I ensure seamless integration while
            continuously refining solutions to enhance usability. From research
            and wireframes to prototypes and design systems, I create user
            experiences that strike the perfect balance between aesthetics and
            functionality.
          </p>
          <img className="bringing-ideas" src={ideas} alt="logo" />
        </div>
      </section>
      <section className="container home-container">
        <h4>What is my strength?</h4>
        <h2 className="home-subtitle">
          <strong>BRIDGING BOTH WORLDS</strong>
          of development and design.
        </h2>
        <div className="content-image-container">
          <p>
            With over a decade of experience in web development, I've been
            deeply involved in projects from inception to completion—some
            successful, others less so. I have led development teams,
            facilitated design sprints, and managed timelines and budgets. My
            experience spans small and large teams, agencies, and startups. As a
            board member, I've gained a broad perspective that now informs my
            ability to deliver cohesive, strategic solutions. I thrive on seeing
            the bigger picture and love helping businesses succeed.
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
