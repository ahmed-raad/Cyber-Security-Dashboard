import React, { useEffect } from "react";
import Table1 from "./Table1";
import code from "../Home/code.png";

const Section2 = () => {
  return (
    <React.Fragment>
      <div id="sec2">
        <div className="sec2-img">
          <img src={code} alt="" />
        </div>
        <div className="sec2-table">
          <Table1 />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Section2;
