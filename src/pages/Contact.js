import "./Contact.css";
import linkedin from "./../images/linkedin.svg";
import github from "./../images/github.svg";
import instagram from "./../images/instagram.svg";

function Contact() {
  return (
    <section id="Contact" className="contact">
      <div className="contact-content">
        <h1 className="contact-title">Let's Chat!</h1>
        <p className="contact-description">
          <a href="mailto:malena.andrade@gmail.com">malena.andrade@gmail.com</a>
        </p>
        <div className="contact-social-icons">
          <a href="https://www.linkedin.com/in/malenaandrade/">
            <img className="work-checkbox" src={linkedin} alt="checkbox" />
          </a>
          <a href="https://github.com/malena">
            <img className="work-checkbox" src={github} alt="checkbox" />
          </a>
          <a href="https://www.instagram.com/malena.creative/">
            <img className="work-checkbox" src={instagram} alt="checkbox" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
