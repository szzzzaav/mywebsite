import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiWebpack } from "react-icons/si";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <FaHtml5 size={170} />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <FaCss3Alt size={170} />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <IoLogoJavascript size={170} />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <FaReact size={170} />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <SiWebpack size={170} />
                  <h5>Webpack</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
