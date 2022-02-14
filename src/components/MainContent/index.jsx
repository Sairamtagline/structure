import React from "react";
import MainContent from "./MainContent";
import MainContentForm from "./MainContentForm";
import Banner from "../../shared/Banner";
import { Col, Container, Row } from "react-bootstrap";

const Index = () => {
  return (
    <div className="section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <MainContent />
            <MainContentForm />
          </Col>
          <Col md={5} className="d-md-block d-none offset-md-1">
            <div className="text-center">
              <Banner />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(Index);
