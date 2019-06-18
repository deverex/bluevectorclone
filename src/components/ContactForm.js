import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div style={{ background: "#f4f4f4" }} className="py-5">
      <p className="text-center pt-5">WRITE TO US</p>
      <h1 className="text-center mb-5">CONTACT</h1>
      <Form>
        <Container>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <Form.Control placeholder="Name*" className="bg-light" />
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Form.Control placeholder="Email*" className="bg-light" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <Form.Control placeholder="Subject*" className="bg-light" />
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Form.Control placeholder="Phone Number*" className="bg-light" />
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <Form.Control
                placeholder="Message*"
                as="textarea"
                rows="10"
                className="bg-light"
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center">
            <Button id="send-button" variant="primary">
              SEND
            </Button>
          </div>
        </Container>
      </Form>
    </div>
  );
};

export default ContactForm;
