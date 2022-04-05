import React from "react";
import { Container } from "react-bootstrap";
import HeroSection from "../HeroSection/HeroSection";
import HomeReviews from "../HomeReviews/HomeReviews";

const Home = () => {
  return (
    <>
      <Container className="my-5">
        <HeroSection />
        <HomeReviews />
      </Container>
    </>
  );
};

export default Home;
