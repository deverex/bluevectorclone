import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Behance from "../img/Behance.png";
import Fb from "../img/FB.png";
import Insta from "../img/INSTA.png";
import LI from "../img/Linked-In.png";
import Pinterest from "../img/Pinterest.png";
import Yb from "../img/YouTube.png";

const Footer = () => {
  return (
    <div style={{ background: "#f4f4f4" }}>
      <Container>
        <Row className="py-5 text-center text-md-left">
          <Col md="3" className="p-0 mb-3 mx-auto">
            <h5>OFFICE</h5>
            <p className="pr-2">
              <span className="font-weight-bold">Gurgaon Office:</span> 2319/P,
              Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana – 122011
              <br />
              <span className="font-weight-bold">Bengaluru Office:</span> D3,
              Pai Layout, Bengaluru-560016
            </p>
          </Col>
          <Col md="3" className="p-0 mb-3 mx-auto">
            <h5>PHONE</h5>
            <p>Gurgaon: +91 8707346767, +91 9899445932</p>
          </Col>
          <Col md="3" className="p-0 mb-3 mx-auto">
            <h5>EMAIL</h5>
            <p>contact@bluevector.co</p>
          </Col>
          <Col md="3" className="p-0 mb-3 mx-auto">
            <h5>SOCIAL</h5>
            <div>
              <a href="https://www.behance.net/bluevector">
                <img alt="" src={Behance} />
              </a>
              &nbsp;
              <a href="https://www.instagram.com/blue.vector/">
                <img alt="" src={Insta} />
              </a>
              &nbsp;
              <a href="https://www.youtube.com/channel/UCcK0z1-vCBR5G7k0kSecJRg">
                <img alt="" src={Yb} />
              </a>
              &nbsp;
              <a href="https://www.facebook.com/thebluevector/">
                <img alt="" src={Fb} />
              </a>
              &nbsp;
              <a href="https://in.pinterest.com/bluevectoragency/pins/">
                <img alt="" src={Pinterest} />
              </a>
              &nbsp;
              <a href="https://in.linkedin.com/company/the-blue-vector">
                <img alt="" src={LI} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#000", height: "100px" }}>
        <p className="text-center text-white pt-5">
          Copyright &copy; 2019, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
