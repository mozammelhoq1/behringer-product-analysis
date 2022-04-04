import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = ({ review }) => {
  const { id, name } = review;
  return (
    <Col>
      <Card className="align-items-center pb-2 border-0 shadow rounded-3">
        {/* <Card.Img variant="top" src={strMealThumb} /> */}
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Text>{name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
