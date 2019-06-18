import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import PicGallery from "./PicGallery";
import SideBar from "./SideBar";

const Modals = ({ showModal, onHide, number }) => {
  return (
    <Modal
      show={showModal}
      onHide={() => onHide()}
      className="full-screen"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Modal.Header
          closeButton
          className="sticky-top bg-white"
          style={{ zIndex: "2" }}
        >
          <Modal.Title id="contained-modal-title-vcenter">Works</Modal.Title>
        </Modal.Header>
        <Row>
          <Col xs={12} md={3} className="no-mp bg-primary">
            <SideBar infoSeries={number} />
          </Col>
          <Col xs={12} md={9} className="no-mp">
            <PicGallery picSeries={number} />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default Modals;
