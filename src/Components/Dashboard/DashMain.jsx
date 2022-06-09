import React from "react";

import Map from "./Map";
import Section2 from "./Section2";
import Section3 from "./Section3";

import "./Dashboard.css";
import Table2 from "./Table2";

const DashMain = () => {
  return (
    <React.Fragment>
      <div id="dash-main-container">
        <div>
          <section id="sec1">
            <Map />
          </section>
          <section id="sec4">
            <Table2 />
          </section>
          <section>
            <Section2 />
          </section>
          <section id="sec3">
            <h2 className="sec3-heading">Tunisia Cybersecurity Evaluation</h2>
            <Section3 />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DashMain;
