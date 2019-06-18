import React from "react";
import { Container, Row, Col, Image, Media } from "react-bootstrap";
import SideImage from "../img/side-cover.jpg";

const AboutUs = () => {
  return (
    <div style={{ background: "#f4f4f4" }}>
      <h1 className="text-center pt-5 pb-2">About Us</h1>
      <Container>
        <Row>
          <Col xs="8" className="mx-auto">
            <h6 className="">
              Blue Vector is a Communication Agency founded on the belief that
              the future of communication lies in Social consolidation. By
              marrying clear Insight, creative Ideation and Digital expertise,
              we aim to develop an organic, community-based Marketing machinery
              for Brands.
            </h6>
          </Col>
        </Row>
      </Container>

      <Row className="m-0">
        <Col md={6} className="p-0">
          <Image src={SideImage} fluid className="mh-100" />
        </Col>
        <Col md={6} className="p-0">
          <ul className="list-unstyled">
            <Media as="li" className="m-5">
              <div className="align-self-center m-5">
                <i className="fa fa-3x fa-eye" />
              </div>
              <Media.Body>
                <h5>OUR PHILOSOPHY</h5>
                <p>
                  We believe in doing meaningful work which can help create
                  communities for Brands based on their fundamental values
                </p>
              </Media.Body>
            </Media>

            <Media as="li" className="m-5">
              <div className="align-self-center m-5">
                <i className="fa fa-3x fa-tree" />
              </div>
              <Media.Body>
                <h5>OUR MISSION</h5>
                <p>
                  To reposition the ‘agency’ as an asset for Brands that can
                  humanly synchronize brands with the market, and not a third
                  party vendor that can help sell
                </p>
              </Media.Body>
            </Media>

            <Media as="li" className="m-5">
              <div className="align-self-center m-5">
                <i className="fa fa-3x fa-podcast" />
              </div>
              <Media.Body>
                <h5>OUR APPROACH</h5>
                <p>
                  By merging creative capabilities with Tools of Social
                  Construction, we create Social infrastructures for Brands to
                  use for Brand-Building, Customer Creation &amp; Retention and
                  Reputation Management
                </p>
              </Media.Body>
            </Media>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
