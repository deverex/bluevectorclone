import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const OurServices = () => {
  return (
    <div style={{ background: "#f4f4f4" }}>
      <h1 className="text-center py-5">OUR SERVICES</h1>
      <Row className="m-5 text-center">
        <Col md="3" className="p-0 mb-3">
          <Card style={{ width: "80%" }} className="h-100 mx-auto">
            <div className="align-self-center m-4 icon">
              <i className="fa fa-3x fa-thumbs-up" />
            </div>
            <Card.Body>
              <Card.Title>PRINT</Card.Title>
              <Card.Text>
                Unfolding creativity for your brand, one page at a time
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" className="p-0 mb-3">
          <Card style={{ width: "80%" }} className="h-100 mx-auto">
            <div className="align-self-center m-4 icon">
              <i className="fa fa-3x fa-paint-brush" />
            </div>
            <Card.Body>
              <Card.Title>SOCIAL MEDIA</Card.Title>
              <Card.Text>
                How do you make your customers your audience
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" className="p-0 mb-3">
          <Card style={{ width: "80%" }} className="h-100 mx-auto">
            <div className="align-self-center m-4 icon">
              <i className="fa fa-3x fa-camera-retro" />
            </div>
            <Card.Body>
              <Card.Title>GOOGLE MARKETING</Card.Title>
              <Card.Text>
                SEO, SEM, GDN and other common abbreviations
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" className="p-0 mb-3">
          <Card style={{ width: "80%" }} className="h-100 mx-auto">
            <div className="align-self-center m-4 icon">
              <i className="fa fa-3x fa-pen" />
            </div>
            <Card.Body>
              <Card.Title>BRANDING</Card.Title>
              <Card.Text>
                First impression equals unending impressions
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mx-5 text-center">
        <Col md="3" className="p-0 mb-3">
          <Card style={{ width: "80%" }} className="h-100 mx-auto">
            <div className="align-self-center m-4 icon">
              <i className="fa fa-3x fa-fire" />
            </div>
            <Card.Body>
              <Card.Title>WEBSITE DEVELOPMENT</Card.Title>
              <Card.Text>
                Came for getting work done, stayed for the site
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" className="p-0 mb-3">
          <Card style={{ width: "80%" }} className="h-100 mx-auto">
            <div className="align-self-center m-4 icon">
              <i className="fa fa-3x fa-tablet" />
            </div>
            <Card.Body>
              <Card.Title>VIDEO PRODUCTION</Card.Title>
              <Card.Text>
                It isn’t enough to tell, you need to show. Period.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" className="p-0 mb-3">
          <Card style={{ width: "80%" }} className="h-100 mx-auto">
            <div className="align-self-center m-4 icon">
              <i className="fa fa-3x fa-water" />
            </div>
            <Card.Body>
              <Card.Title>UI/UX</Card.Title>
              <Card.Text>
                There’s a story to be told under that screen
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" className="p-0 mb-3">
          <Card style={{ width: "80%" }} className="h-100 mx-auto">
            <div className="align-self-center m-4 icon">
              <i className="fa fa-3x fa-file-image" />
            </div>
            <Card.Body>
              <Card.Title>CONTENT DEVELOPMENT</Card.Title>
              <Card.Text>A thousand words speak ten thousand more</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OurServices;
