import React from "react";
import { Col } from "react-bootstrap";
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
    <Col md={6}>
      <Tabs defaultKey="Leaders" {...{ tabs }} />
      <AssetsDescription />
    </Col>
  )
};

export default Index;
