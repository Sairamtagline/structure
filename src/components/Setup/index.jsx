import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Description from "../../shared/Description";
import Title from "../../shared/Title";
import mockData from "./mockData";

const Index = () => {
  return (
    <div className="section pb-small">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="text-center">
              <Title>Ready, set, trade</Title>
              <Description>
                Setup an account and start trading in less than 5 minutes.
              </Description>
            </div>
          </Col>
        </Row>
        <Row>
            {mockData.map(({ title, description, image }, index) => {
                return (
                <Col md={4} key={index}>
                    <div className="icon-box text-center">
                        {image}
                        <h5>{title}</h5>
                        {description.map((d, i) => (
                            <Description key={i}>{d}</Description>
                        ))}
                    </div>
                </Col>
                );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Index;
