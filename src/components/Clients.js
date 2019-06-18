import React from "react";
import { Image } from "react-bootstrap";
import clientImage from "../img/clients.png";

const Clients = () => {
  return (
    <div style={{ background: "#f4f4f4" }} className="py-5">
      <h1 className="text-center pt-5 mb-5">CLIENTS</h1>
      <Image src={clientImage} className="mx-auto d-block" fluid />
    </div>
  );
};

export default Clients;
