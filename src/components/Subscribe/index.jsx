import React from "react";
import MainContent from "./MainContent";
import MainContentForm from "./MainContentForm";
import Iphone13 from "../../images/IPhone13.png";
import { Col, Row } from "react-bootstrap";
import Container from "../../shared/Container";

const Index = () => {
  return (
    <Container extraClass="pb-md-0 pt-0">
      <Row className="align-items-center flex-lg-row-reverse">
        <Col md={6}>
          <div className="subscribe-image">
            <img src={Iphone13} alt="Iphone13" />
          </div>
        </Col>
        <Col md={6}>
          <div className="subscribe">
            <MainContent />
            <MainContentForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(Index);
