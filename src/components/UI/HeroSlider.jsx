import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Tamilnadu Government G.O. Ms. No. 1294 dated 29.9.1984</h4>
            <h1 className="text-light mb-4">AICTE, New Delhi approval No. F.No.45-46/91-AICTE/586 dated 19.4.1993</h1>

            
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Tamilnadu Government G.O. Ms. No. 1294 dated 29.9.1984</h4>
            <h1 className="text-light mb-4">AICTE, New Delhi approval No. F.No.45-46/91-AICTE/586 dated 19.4.1993</h1>

            
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Tamilnadu Government G.O. Ms. No. 1294 dated 29.9.1984</h4>
            <h1 className="text-light mb-4">AICTE, New Delhi approval No. F.No.45-46/91-AICTE/586 dated 19.4.1993</h1>

            
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
