import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../images/hero-img.png";
const HeroSection = () => {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col xs={12} sm={12} md={5} lg={5} xl={5}>
          <img src={image} className="img-fluid" alt="" />
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} xl={7}>
          <h2
            className="fw-bold lh-base  text-center"
            style={{ fontFamily: "serif" }}
          >
            LIVE BUDS – High Quality Sound <br />
            <span className="text-primary">
              High-Fidelity Wireless Earphones with Bluetooth True Wireless
              Stereo Connectivity
            </span>
          </h2>
          <p>
            <small>
              LIVE BUDS deliver high-definition bass and super-transparent highs
              across an ultra-wide dynamic range. Our LIVE BUDS in-ear earphones
              feature high-efficiency neodymium micro-drivers that provide
              incredible high-resolution performance – at a price that is very
              kind to every budget.
            </small>
          </p>
          <button className="btn btn-primary mt-3">LIVE DEMO</button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
