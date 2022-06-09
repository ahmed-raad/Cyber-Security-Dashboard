import React, { useEffect } from "react";
import Table1 from "./Table1";
import LineChart from "./LineChart";

const Section2 = () => {
  return (
    <React.Fragment>
      <div id="sec2">
        <div className="sec2-table">
          <Table1 />
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Section2;
