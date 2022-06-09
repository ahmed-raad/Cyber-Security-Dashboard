import React, { useEffect } from "react";
import code from "../Dashboard/code.png";

import Circle from "./Circle";
import "./Dashboard.css";

const Section3 = () => {
  return (
    <React.Fragment>
      <div id="sec3-container">
        <div>
          <Circle />
        </div>
        <div className="sec2-img">
          <img src={code} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Section3;
