import "./Home.css";
import "./Testimonials.css";
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
              I am currently updating my portfolio and taking a Masters Program
              at LABASAD in Creative Direction with a specialization in AI.
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
            I collaborate with clients through deep exploration to align design
            with business goals. By researching users and identifying pain
            points, I translate ideas into wireframes that solve core challenges
            and support strategic objectives. My consulting helps startups
            integrate design with business strategy for lasting impact.
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
            I transform ideas into intuitive interfaces and scalable systems,
            integrating reusable UI patterns for efficiency. Through close
            collaboration with developers, I ensure seamless integration and
            continuously refine solutions to enhance usability. From research
            and wireframes to prototypes and design systems, I craft user
            experiences that balance aesthetics and functionality.
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
            With over a decade in web development, I’ve led projects from
            inception to completion—across startups, agencies, and large teams.
            I’ve led development teams, facilitated design sprints, and managed
            timelines and budgets. Serving as a board member has given me a
            strategic, big-picture perspective that informs how I deliver
            cohesive, impactful solutions. I thrive on helping businesses
            succeed.
          </p>
          <img className="bringing-ideas" src={bridge} alt="logo" />
        </div>
      </section>
      <section className="testimonials">
        <h4 className="testimonials-subtitle">
          What Colleagues and Clients are saying!
        </h4>
        <div className="testimonials-section">
          <div className="testimonial testimonial-1">
            <p className="testimonial-quote">
              <strong>
                <i>
                  Ryan Moehring,
                  <br /> CEO at NATURAL INTELLIGENCE Consultants
                </i>
              </strong>
            </p>
            <p>
              I had the great pleasure of having Malena on my projects on
              several occasions. Not only is she a gifted designer, but she
              possesses the kinds of people skills that are so hard to come by
              in her field. I'm a highly selective leader, and Malena always
              gracefully accommodated all of my and my team's feedback and
              requests for iterations. If I couldn't get Malena on a project
              because of timing or resource conflicts, I would postpone my
              project timeline until she was available. That's how good she is!
            </p>
          </div>

          <div className="testimonial testimonial-2">
            <p className="testimonial-quote">
              <strong>
                <i>
                  Michael Lewkowitz, <br />
                  General Partner at Possibilian
                </i>
              </strong>
            </p>
            <p>
              Malena is exceptionally talented and dedicated developer, eager
              and able to tackle hard challenges and pick up new skills on the
              fly. She cares deeply about her code and her craft and can always
              be counted on her document and share her solutions with the rest
              of the team. Working in a virtual team she clearly showed she
              treats work as something much greater than a job, and that's a
              gift to any team.
            </p>
          </div>
        </div>
        <div className="testimonial testimonial-3">
          <p className="testimonial-quote">
            <strong>
              <i>
                Dan James, <br />
                Founder at Silverorange
              </i>
            </strong>
          </p>
          <p>
            I've had the pleasure of working with Malena for 7+ years. Many of
            those years were as peers at a board level. Malena is thoughtful,
            hard working, and thorough. She is also a talented designer with a
            fine attention to detail.
          </p>
        </div>
      </section>
      <section className="container cases-project-slider">
        <h4>Case Studies</h4>
        <ProjectSlider currentSlide={0} />
      </section>
    </div>
  );
}

export default Home;
