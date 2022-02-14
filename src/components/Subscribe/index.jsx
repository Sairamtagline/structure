import React from "react";
import MainContent from "./MainContent";
import MainContentForm from "./MainContentForm";
import Iphone13 from "../../images/IPhone13.png";
import { Col, Row } from "react-bootstrap";
import Container from "../../shared/Container";

const Index = () => {
  return (
    <Container extraClass="pb-md-0 pt-sm-0">
      <Row className="align-items-center flex-row-reverse">
        <Col md={6}>
          <div className="text-center">
            <img src={Iphone13} alt="Iphone13" />
          </div>
        </Col>
        <Col md={6}>
          <MainContent />
          <MainContentForm />
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(Index);
