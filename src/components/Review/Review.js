import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = ({ review }) => {
  const { name, img, comment, rating } = review;
  return (
    <Col>
      <Card className="justify-content-center align-items-center border-0 shadow rounded-3 h-100  py-3">
        <Card.Img className="rounded-circle w-50" variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <small className="fw-bold me-3">{name}</small>{" "}
            <small className="text-warning me-2">
              <FontAwesomeIcon icon={faStar} />
            </small>
            <small className="text-secondary">{rating}</small>
          </Card.Title>
          <Card.Text>
            <blockquote className="blockquote-footer mt-3">
              {comment}
            </blockquote>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
