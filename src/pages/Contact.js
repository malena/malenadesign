import "./Contact.css";
import resume from "./../MalenaAndradeResume.pdf";
import contact from "./../images/home-contact.png";

function Contact() {
  return (
    <div className="contact">
      <section className="contact-main-section">
        <div className="contact-content">
          <div className="home-content-container">
            <h4 className="title-label">Contact Me</h4>
            <h2 className="home-subtitle">
              <strong>LET'S WORK TOGETHER</strong>
              and build an awesome digital product!
            </h2>
            <p>
              I am currently available and eager to find a challenging project
              to work on. Email me with your ideas or connect with me via
              LinkedIn. I am looking forward to working with you!
            </p>
          </div>
          <img className="bringing-ideas" src={contact} alt="logo" />
        </div>
        <div className="about-buttons">
          <a
            className="button button-external"
            href="mailto:malena.andrade@gmail.com"
          >
            <h3>Email</h3>
            <p>Contact me</p>
          </a>
          <a
            className="button button-external"
            href="https://www.linkedin.com/in/malenaandrade/"
          >
            <h3>LinkedIn </h3>
            <p>Connect with me</p>
          </a>
          <a
            className="button button-external"
            href="https://github.com/malena"
          >
            <h3>Github</h3>
            <p>See my code</p>
          </a>
          <a className="button button-external" href={resume}>
            <h3>Resume</h3>
            <p>View my resume</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
