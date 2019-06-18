import React from "react";

const SideBar = infoSeries => {
  if (infoSeries.infoSeries === 1) {
    return (
      <div className="text-center text-white p-2 bg-primary sticky-top move-center">
        <h4 className="font-weight-bold">
          Distillery Craft Beer &amp; Brewery - Branding
        </h4>
        <h6>Art Direction Branding Graphic Design</h6>
      </div>
    );
  }

  if (infoSeries.infoSeries === 2) {
    return (
      <div className="text-center text-white p-2 bg-primary sticky-top move-center">
        <h4 className="font-weight-bold">Rio - Launch Campaign</h4>
        <h6>Art Direction Branding Graphic Design</h6>
      </div>
    );
  }

  if (infoSeries.infoSeries === 3) {
    return (
      <div className="text-center text-white p-2 bg-primary sticky-top move-center">
        <h4 className="font-weight-bold">Audi-Apex</h4>
        <h6>Art Direction Branding Graphic Design</h6>
      </div>
    );
  }

  if (infoSeries.infoSeries === 4) {
    return (
      <div className="text-center text-white p-2 bg-primary sticky-top move-center">
        <h4 className="font-weight-bold">Whisky Samba | Launch"</h4>
        <h6>Graphic Design Branding Art Direction</h6>
      </div>
    );
  }

  if (infoSeries.infoSeries === 5) {
    return (
      <div className="text-center text-white p-2 bg-primary sticky-top move-center">
        <h4 className="font-weight-bold">Porsche 718 Boxster | Photoshoot</h4>
        <h6>Graphic Design Branding Art Direction</h6>
      </div>
    );
  }
};

export default SideBar;
