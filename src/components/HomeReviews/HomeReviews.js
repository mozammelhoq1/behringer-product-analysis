import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const HomeReviews = () => {
  const [reviews] = useReviews();
  return (
    <Container>
      <h1 className="my-5">
        Customer <span className="text-primary">Review</span>
      </h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </Row>
      <Button variant="primary" size="sm" className="my-5 px-5">
        See All Reviews
      </Button>
    </Container>
  );
};

export default HomeReviews;
