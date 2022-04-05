import React from "react";
import { Col, Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container className="my-5">
      <Col className="my-5">
        <h2>What is Semantic Tag ?</h2>
        <p className="text-start">
          Some tags are used to describe the browser in a clear way, they are
          called semantic tags. The browser is powered by an automated robot, so
          the robot must be interpreted in its own language, semantic tags are
          basically some of these constructive tags. Which the browser can read
          very easily. Below are some examples of semantic tags :
          <ul className="text-start">
            <li>nav</li>
            <li>main</li>
            <li>header</li>
            <li>section</li>
            <li>article</li>
            <li>summary</li>
            <li>footer</li>
          </ul>
        </p>
      </Col>
      <Col className="my-5">
        <h2>Difference between inline, block and inline-block elements.</h2>
        <ul className="text-start">
          <li>
            Inline: Tags that are in the same line are called inline elements.
          </li>
          <li>
            Block: The tags that create new lines are called block elements
          </li>
          <li>
            Inline-Block: When the properties of a block are applied to an
            inline element, that element is called an inline-block element. We
            use CSS to create inline-block elements.
          </li>
        </ul>
      </Col>
    </Container>
  );
};

export default Blogs;
