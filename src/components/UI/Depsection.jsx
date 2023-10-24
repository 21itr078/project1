import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/dep-sec.css";
import depImg from "../../assets/all-images/cars-img/bmw-offer.png";

const Department = ({ aboutClass }) => {
  return (
    <section
      className="dep__section"
      style={
        aboutClass === "department"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="dep__section-content">
              <h4 className="section__subtitle">Department</h4>
              <h2 className="section__title">Welcome to Konu College</h2>
              <p className="section__description">
              Kongu Engineering College, one of the foremost multi professional research-led Institutions is 
              internationally a recognized leader in professional and career-oriented education. It provides an integral,
               inter-disciplinary education - a unique intersection between theory and practice, passion and reason. 
              </p>

              <div className="dep__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Provide value based quality education for developing the students as a competent and responsible citizen.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 
                  Contribute to the nation and beyond through the state of the art Technology.
                </p>
              </div>

              <div className="dep__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Continuously improve our services.
                </p>

                
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="dep__img">
              <img src={depImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Department;
