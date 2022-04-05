import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../images/logo.svg";
import googlePay from "../../images/google-play.png";
import paymentMethod from "../../images/pay-with.png";

const Footer = () => {
  return (
    <Row className="mx-auto bg-primary g-4 p-4">
      <Col xs={12} md={4} className="text-start text-light fw-normal">
        <img className="mb-4" src={logo} alt="" />
        <p>
          {" "}
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <span className="ms-2">
            Level-3, 24, Agrabad, DoubleMooring, Chittagong
          </span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <span className="ms-2">Official: masum-behringer@gmail.com</span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span className="ms-2">Helpline: 01822777360 , 01759427128</span>
        </p>
        <small>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</small>
      </Col>
      <Col xs={12} md={4} className="text-start text-light">
        <p>About Us</p>
        <p>Success</p>
        <p>Refund policy</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <img className="img-fluid" src={googlePay} alt="" />
      </Col>
      <Col xs={12} md={4} className="text-start text-light">
        <img className="img-fluid" src={paymentMethod} alt="" />
      </Col>
      <p className="fw-bold text-light">
        Copyright © 2022 mozammelhoq512@gmail.com
      </p>
    </Row>
  );
};

export default Footer;
