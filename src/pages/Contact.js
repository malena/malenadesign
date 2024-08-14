import "./Contact.css";
import linkedin from "./../images/linkedin.svg";
import github from "./../images/github.svg";
import instagram from "./../images/instagram.svg";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h1 className="contact-title">Let's Chat!</h1>
        <p className="contact-description">malena.andrade@gmail.com</p>
        <div className="contact-social-icons">
          <img className="work-checkbox" src={linkedin} alt="checkbox" />
          <img className="work-checkbox" src={github} alt="checkbox" />
          <img className="work-checkbox" src={instagram} alt="checkbox" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
