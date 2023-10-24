import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/Login",
    display: "Login",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ph:graduation-cap-duotone"></i>
                  <span>
                    Kongu College of Technology <br /> (Autonomous)
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              We are committed to value-based Education, Research, and Consultancy in Engineering and Management and to bring out technically competent, ethically strong, and quality professionals to keep our Nation ahead in the competitive knowledge-intensive world.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Reception</h5>
              <p className="office__info">KONGU ENGINEERING COLLEGE Perundurai, Erode-638 060, Tamilnadu, India</p>
              <p className="office__info">Phone: 04294 - 226555</p>
              <p className="office__info">Email: keciipc@kongu.ac.in</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Questions</h5>
              <p className="section__description">To Know More Information</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                
                <span>
                  <i class="ph:graduation-cap-duotone"></i>
                </span> 
              </div><br></br>
              <center>
              <button className="send-button" type="button"  >Send</button></center>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
