import React from "react";
import { Container, Row } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();

  return (
    <Container className="my-5">
      <h1 className="my-5 fw-bold">What Our Customers Say!</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
