import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import PicModal from "./Modal/Modals";

const Work = () => {
  const [modalState, setModalState] = useState(false);

  const [modalNumber, setModalNumbar] = useState(0);

  const onHide = () => setModalState(false);

  return (
    <div style={{ background: "#f4f4f4" }} className="py-5">
      <PicModal
        showModal={modalState}
        onHide={() => onHide()}
        number={modalNumber}
      />

      <h1 className="text-center pt-5 mb-5">WORK</h1>

      <Row className="m-0 mx-auto">
        <Col
          xs={12}
          md={4}
          className="overflow-hidden mb-3"
          style={{ maxHeight: "300px" }}
        >
          <div className="showcase showcase1">
            <div className="container">
              <div className="showcase-container">
                <div className="showcase-content">
                  <p className="font-weight-bold">Distillery</p>
                  <button
                    className="read-more"
                    onClick={() => {
                      setModalState(true);
                      setModalNumbar(1);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={8}
          className="overflow-hidden  mb-3"
          style={{ maxHeight: "300px" }}
        >
          <div className="showcase showcase2">
            <div className="container">
              <div className="showcase-container">
                <div className="showcase-content">
                  <p className="font-weight-bold">Rio Launch Campaign</p>
                  <button
                    className="read-more"
                    onClick={() => {
                      setModalState(true);
                      setModalNumbar(2);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="m-0 mx-auto">
        <Col
          xs={12}
          md={8}
          className="overflow-hidden  mb-3"
          style={{ maxHeight: "300px" }}
        >
          <div className="showcase showcase3">
            <div className="container">
              <div className="showcase-container">
                <div className="showcase-content">
                  <p className="font-weight-bold">Audi - Apex</p>
                  <button
                    className="read-more"
                    onClick={() => {
                      setModalState(true);
                      setModalNumbar(3);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="overflow-hidden  mb-3"
          style={{ maxHeight: "300px" }}
        >
          <div className="showcase showcase4">
            <div className="container">
              <div className="showcase-container">
                <div className="showcase-content">
                  <p className="font-weight-bold">Whiskey Samba</p>
                  <button
                    className="read-more"
                    onClick={() => {
                      setModalState(true);
                      setModalNumbar(4);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="m-0 mx-auto">
        <Col
          md={3}
          xs={12}
          className="overflow-hidden  mb-3"
          style={{ maxHeight: "300px" }}
        >
          <div className="showcase showcase6">
            <div className="container">
              <div className="showcase-container">
                <div className="showcase-content" />
              </div>
            </div>
          </div>
        </Col>
        <Col
          md={9}
          xs={12}
          className="overflow-hidden  mb-3"
          style={{ maxHeight: "300px" }}
        >
          <div className="showcase showcase5">
            <div className="container">
              <div className="showcase-container">
                <div className="showcase-content">
                  <p className="font-weight-bold">Porsche 718</p>
                  <button
                    className="read-more"
                    onClick={() => {
                      setModalState(true);
                      setModalNumbar(5);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="mt-5 d-flex justify-content-center align-items-center">
        <Button variant="info">More Work</Button>
      </div>
    </div>
  );
};

export default Work;
