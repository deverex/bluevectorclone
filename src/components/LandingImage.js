import React from "react";
import { Image } from "react-bootstrap";
import hpbanner from "../img/hpbanner.png";

const LandingImage = () => {
  return (
    <div>
      <Image src={hpbanner} fluid />
    </div>
  );
};

export default LandingImage;
