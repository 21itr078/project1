import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
         Kongu Engineering College is an acclaimed academician, researcher and an
         industrial executive with a total experience of 34 years. He had his BE (Hons) degree in Mechanical Engineering from PSG College of Technology,
         Coimbatore, MTech degree in Industrial Metallurgy from IIT Madras.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Dr. V. Balusamy</h6>
            <p className="section__description">Principal</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Kongu Engineering College is an acclaimed academician, researcher and an
         industrial executive with a total experience of 34 years.No.of Papers published in National Conferences: 13 and International Journals : 30, He had his BE,MTech,PhD degree in Information Technology.
         </p>
      

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Dr.R.Thangarajan</h6>
            <p className="section__description">HOD (Information Technology)</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Kongu Engineering College is an acclaimed academician, researcher and an
         industrial executive with a total experience of 28 years. No.of Papers published in Number of Papers Published : 79 and Number of Papers Presented : NC : 19, IC : 50 He had his BE,MTech,PhD degree in Computrer Science Engineering. 
         </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Dr.N.Shanthi</h6>
            <p className="section__description">HOD (Computer Science)</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Kongu Engineering College is an acclaimed academician and an
         industrial executive with a total experience of 14 Years. No.of Papers published in National Journals : 05 and International Journals : 24, He had his BE,MTech,PhD degree in Civil Engineering.
           
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Dr. S.Balaji</h6>
            <p className="section__description">HOD (Civil Engineering)</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
