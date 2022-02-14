import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../shared/Button";
import Description from "../../shared/Description";
import Title from "../../shared/Title";
import mockData from "./mockData";

const Index = () => {
  return (
    <div className="section pb-small pt-small">
      <Container>
        <Row className="justify-content-center">
          <Col xl={9}>
            {mockData.map(({ title, description, button, image }, index) => {
              return (
                <div className="features-list" key={index}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <div className="features-image">{image}</div>
                    </Col>
                    <Col md={6}>
                      <Title>{title}</Title>
                      {description.map((d, i) => (
                        <Description key={i}>{d}</Description>
                      ))}
                      <Button variant="primary">{button}</Button>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
