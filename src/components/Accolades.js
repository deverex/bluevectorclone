import React from "react";
import { Image } from "react-bootstrap";
import accoladesImage from "../img/a.jpg";

const Accolades = () => {
  return (
    <div style={{ background: "#f4f4f4" }} className="py-5">
      <h1 className="text-center pt-5 mb-5">ACCOLADES</h1>
      <Image src={accoladesImage} className="mx-auto d-block" fluid />
    </div>
  );
};

export default Accolades;
