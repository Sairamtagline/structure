import React from "react";
import MainContent from "./MainContent";
import MainContentForm from "./MainContentForm";
import Iphone13 from "../../images/IPhone13.png";
import { Col, Container, Row } from "react-bootstrap";

const Index = () => {
  return (
    <div className="section pb-0">
      <Container>
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
    </div>
  );
};

export default React.memo(Index);
