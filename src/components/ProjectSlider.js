import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectSlider.css";
import uc from "./../images/ucmaximusLarge.png";
import mibunker from "./../images/mibunkerSmall.png";
import starmaker from "./../images/starmaker.png";

function ProjectSlider({ currentSlide }) {
  var settings = {
    arrows: false,
    autoplay: false,
    initialSlide: currentSlide,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="slider project-slider" {...settings}>
      <div className="item item-1">
        <div className="item-container">
          <div>
            <h3>Mi Bunker</h3>
            <p>
              A mobile app that allows professionals in the construction
              industry to connect and share resources.
            </p>
            <Link className="button" to="/mibunker">
              miBunker
            </Link>
          </div>
          <Link className="slider-image" to="/mibunker">
            <img src={mibunker} alt="miBunker" />
          </Link>
        </div>
      </div>
      <div className="item item-2">
        <div className="item-container">
          <section>
            <h3>UC Maximus</h3>
            <p>
              A branded medical education program within a subcription base
              platform.
            </p>
            <Link className="button" to="/ucmaximus">
              UC Maximus
            </Link>
          </section>
          <Link className="slider-image" to="/ucmaximus">
            <img className="slider-image" src={uc} alt="UC Maximus" />
          </Link>
        </div>
      </div>
      <div className="item item-3">
        <div className="item-container">
          <section>
            <h3>Starmaker</h3>
            <p>
              A web app for Canadian musicians and labels to apply for funding.
            </p>
            <Link className="button" to="/starmaker">
              Starmaker
            </Link>
          </section>
          <Link className="slider-image" to="/starmaker">
            <img className="slider-image" src={starmaker} alt="Starmaker" />
          </Link>
        </div>
      </div>
    </Slider>
  );
}

export default ProjectSlider;
