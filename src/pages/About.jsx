import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Welcome To The Office Of Controller Of Examinations
                </h2>

                <p className="section__description">
                "The Kongu Vellalar Institute of Technology Trust" (KVITT), 
                came into being on account of the continuous and magnanimous efforts of a group of
                 illustrious people from all walks of life during 1983. The origin of the term " K O N G U " 
                 dates back to putative race called " C H E R A " who ruled the south in those days. 
                </p>

                <p className="section__description">
                Thus, the word "Kongu Vellalar" refers to a community called Kongu Vellalar Gounders,
                 mainly concentrated in and around Erode District. The Community "KONGU" as it is called, 
                 was pushed to the background, owing to the privatisation of facilities in the field of education,
                  especially, Technical Education. Hence, this Trust was created by a group of philanthropists
                   from Kongu Vellalar Gounders to promote technical education and cultural activities and to encourage
                    literary and scientific knowledge.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                  <i class="bi bi-mortarboard"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      

     
    </Helmet>
  );
};

export default About;
