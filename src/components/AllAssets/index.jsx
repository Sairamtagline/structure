import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "../../shared/Container";
import Tabs from "../../shared/Tabs";
import AssetsDescription from "./AssetsDescription";
import Crypto from "./Crypto";
import Leaders from "./Leaders";
import Options from "./Options";
import Stocks from "./Stocks";

const tabs = {
  "Leaders": <Leaders />,
  "Stocks": <Stocks />,
  "Crypto": <Crypto />,
  "Options (coming soon)": <Options />,
};
const Index = () => {
  return (
    <Container extraClass="pt-small">
      <Row>
        <Col md={6}>
          <Tabs defaultKey="Leaders" {...{ tabs }} />
        </Col>
        <Col md={6}>
          <AssetsDescription />
        </Col>
      </Row>
    </Container>
  )
};

export default Index;
