import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function Testimonials() {
  var settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 12000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonials">
      <div className="testimonials-section">
        <h2 className="testimonials-subtitle">What others are saying!</h2>
        <Slider className="slider testimonialsSlider" {...settings}>
          <div className="testimonial testimonial-1">
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
            <p className="testimonial-quote">
              <strong>
                <i>
                  Ryan Moehring,
                  <br /> CEO at NATURAL INTELLIGENCE Consultants
                </i>
              </strong>
            </p>
          </div>

          <div className="testimonial testimonial-2">
            <p>
              Malena is exceptionally talented and dedicated developer, eager
              and able to tackle hard challenges and pick up new skills on the
              fly. She cares deeply about her code and her craft and can always
              be counted on her document and share her solutions with the rest
              of the team. Working in a virtual team she clearly showed she
              treats work as something much greater than a job, and that's a
              gift to any team.
            </p>
            <p className="testimonial-quote">
              <strong>
                <i>
                  Michael Lewkowitz, <br />
                  General Partner at Possibilian
                </i>
              </strong>
            </p>
          </div>
          <div className="testimonial testimonial-3">
            <p>
              I've had the pleasure of working with Malena for 7+ years. Many of
              those years were as peers at a board level. Malena is thoughtful,
              hard working, and thorough. She is also a talented designer with a
              fine attention to detail.
            </p>
            <p className="testimonial-quote">
              <strong>
                <i>
                  Dan James, <br />
                  Founder at Silverorange
                </i>
              </strong>
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
