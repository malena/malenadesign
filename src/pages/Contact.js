import "./Contact.css";
import linkedin from "./../images/linkedin.svg";
import github from "./../images/github.svg";
import instagram from "./../images/instagram.svg";

function Contact() {
  return (
    <section id="Contact" className="contact main-section">
      <div className="contact-content">
        <div className="contact-description">
          <h1 className="section-title contact-title">Let's Chat!</h1>
          <p>
            Find out more about me and my work background.
            <strong className="contact-email">
              <a href="mailto:malena.andrade@gmail.com">
                malena.andrade@gmail.com
              </a>
            </strong>
          </p>
        </div>
        <div className="contact-social-icons">
          <a href="https://www.linkedin.com/in/malenaandrade/">
            <img
              className="contact-social-icon"
              src={linkedin}
              alt="checkbox"
            />
          </a>
          <a href="https://github.com/malena">
            <img className="contact-social-icon" src={github} alt="checkbox" />
          </a>
          <a href="https://www.instagram.com/malena.creative/">
            <img
              className="contact-social-icon"
              src={instagram}
              alt="checkbox"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
