import React from "react";
import ScrollUp from "react-scroll-up";

const ScrollToTop = () => {
  return (
    <ScrollUp showUnder={1000} duration={1500}>
      <div className="icon-round text-center align-self-center ">
        <i className="fa fa-2x fa-angle-up mt-2" />
      </div>
    </ScrollUp>
  );
};

export default ScrollToTop;
