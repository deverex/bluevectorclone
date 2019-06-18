import React from "react";

const PicGallery = picSeries => {
  return (
    <div>
      <img
        className="img-w"
        src={require(`../../img/${picSeries.picSeries}-1.jpg`)}
        alt="First slide"
      />

      <img
        className="img-w"
        src={require(`../../img/${picSeries.picSeries}-2.jpg`)}
        alt="Second slide"
      />

      <img
        className="img-w"
        src={require(`../../img/${picSeries.picSeries}-3.jpg`)}
        alt="Third slide"
      />
    </div>
  );
};

export default PicGallery;
