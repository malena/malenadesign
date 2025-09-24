import { Link } from "react-router-dom";
import "./CaseStudies.css";
import mibunkerLarge from "./../images/mibunkerLarge.png";
import ucmaximusLarge from "./../images/ucmaximusLarge.png";
import starmaker from "./../images/starmaker.png";

function CaseStudies() {
  return (
    <div class="case-studies-container">
      <header className="container cases-container-header">
        <h4 className="title-label">Case Studies</h4>
        <h2 className="home-subtitle">
          <strong>A PEEK INTO MY WORK</strong>
          to understand what I do.
        </h2>
      </header>
      <div class="case-studies">
        <section className="container cases-header">
          <h2>miBunker</h2>
          <div className="cases-container">
            <div>
              <p>
                I was approached by the co-founders of this startup to assist in
                the initiation of their project. Lacking prior experience in
                application development, they sought guidance in transforming
                their concept into a functional prototype.
              </p>
              <Link className="button" to="/mibunker">
                miBunker
              </Link>
            </div>
            <img
              className="cases-small-image"
              src={mibunkerLarge}
              alt="miBunker App"
            ></img>
          </div>
        </section>
        <section className="container cases-header">
          <h2>UC Maximus</h2>
          <div className="cases-container">
            <div>
              <p>
                Goal was to design a branded microsite for UC Maximus, a medical
                education program tailored for Urgent Care Physicians. The
                challenge was to ensure the design felt distinct for this
                audience while still aligning with the playful, branded
                aesthetic of the parent website EM:RAP, which catered to
                Emergency Medicine Physicians.
              </p>
              <Link className="button" to="/ucmaximus">
                UC Maximus
              </Link>
            </div>
            <img
              className="cases-small-image"
              src={ucmaximusLarge}
              alt="Urgent Care: Maximus"
            />
          </div>
        </section>
        <section className="container cases-header">
          <h2>Starmaker</h2>
          <div className="cases-container">
            <div>
              <p>
                Goal was to design a branded microsite for UC Maximus, a medical
                education program tailored for Urgent Care Physicians. The
                challenge was to ensure the design felt distinct for this
                audience while still aligning with the playful, branded
                aesthetic of the parent website EM:RAP, which catered to
                Emergency Medicine Physicians.
              </p>
              <Link className="button" to="/starmaker">
                Starmaker
              </Link>
            </div>
            <img
              className="cases-small-image"
              src={starmaker}
              alt="Urgent Care: Maximus"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default CaseStudies;
