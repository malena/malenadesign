import "./Footer.css";
import linkedin from "./../images/linkedin.svg";
import github from "./../images/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <section className="footer-menu">
          <h3>Let's work together!</h3>
          <p>
            Contact me at{" "}
            <a className="link-text" href="mailto:malena.andrade@gmail.com">
              malena.andrade@gmail.com.
            </a>
          </p>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/malenaandrade/">
              <img
                className="footer-social-icon"
                src={linkedin}
                alt="checkbox"
              />
            </a>
            <a href="https://github.com/malena">
              <img className="footer-social-icon" src={github} alt="checkbox" />
            </a>
          </div>
        </section>
        <section className="footer-menu">
          <h3>Thanks for stopping by!</h3>
          <p>
            This website was designed in Figma, built with React.js and hosted
            on Github. Check out my code&nbsp;
            <a
              className="link-text"
              href="https://github.com/malena/malenadesign"
            >
              here.
            </a>
          </p>
          <p>&copy; Malena Andrade 2025</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
