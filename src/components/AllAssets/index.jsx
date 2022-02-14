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
    <Container extraClass="pt-small pb-small">
      <Row className="align-items-center">
        <Col xl={6} lg={7}>
          <Tabs defaultKey="Leaders" {...{ tabs }} />
        </Col>
        <Col xl={6} lg={5}>
          <div className="px-xl-5 px-sm-4">
            <AssetsDescription />
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default Index;
