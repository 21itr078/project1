import React from "react";
import "../../styles/Instruct.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const Instruct = () => {
  return (
    <section className="become">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h5 className="section__title become-title">
            Kongu College of Technology, with an enriching history of excellence spanning four decades, has been a significant contributor to the advancements of knowledge in teaching-learning, research and administration,
             and thus been consistently ranked among the best engineering institutions in India.
            </h5>

           
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Instruct;
