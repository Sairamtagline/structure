import React from "react";
import MainContent from "./MainContent";
import MainContentForm from "./MainContentForm";
import Iphone13 from "../../images/IPhone13.png";
import { Col, Row } from "react-bootstrap";
import Container from "../../shared/Container";

const Index = () => {
  return (
    <Container extraClass="pb-0">
      <Row className="align-items-center">
        <Col md={6}>
          <MainContent />
          <MainContentForm />
        </Col>
        <Col md={6} className="d-md-block d-none">
          <div className="text-center">
            <img src={Iphone13} alt="Iphone13" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(Index);
