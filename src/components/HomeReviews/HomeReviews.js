import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Review from "../Review/Review";

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </Row>
    </Container>
  );
};

export default HomeReviews;
