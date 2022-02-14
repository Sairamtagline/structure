import React from "react";
import { Container } from "react-bootstrap";
import { ReactComponent as ArrowRight } from "../../images/ArrowRight.svg";

const Banner = () => {
  return (
    <div className="top-header">
      <Container>
        <p className="text-center d-flex align-items-center justify-content-center">
            <span className="me-2">Get no-fee trad ing for life when you sign up today</span> <ArrowRight /></p>
      </Container>
    </div>
  );
};

export default Banner;
