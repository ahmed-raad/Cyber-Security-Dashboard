import React from "react";

import Map from "./Map";
import Section2 from "./Section2";
import Section3 from "./Section3";

import "./Dashboard.css";
import Table2 from "./Table2";
import LineChart from "./LineChart";

const DashMain = () => {
  return (
    <React.Fragment>
      <div id="dash-main-container">
        <div>
          <section id="sec1">
            <Map />
          </section>
          <section>
            <Section2 />
          </section>
          <section id="sec3">
            <Section3 />
          </section>
          <section id="sec4">
            <Table2 />
          </section>
          <section id="sec5">
            <LineChart />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DashMain;
