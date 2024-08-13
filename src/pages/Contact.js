import "./Contact.css";
import checkbox from "./../images/checkbox.svg";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h1 className="contact-title">Let's Chat!</h1>
        <p className="contact-description">malena.andrade@gmail.com</p>
        <div className="contact-social-icons">
          <img className="work-checkbox" src={checkbox} alt="checkbox" />
          <img className="work-checkbox" src={checkbox} alt="checkbox" />
          <img className="work-checkbox" src={checkbox} alt="checkbox" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
