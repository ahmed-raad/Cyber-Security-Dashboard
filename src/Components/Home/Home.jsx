import React, { useEffect } from "react";

import Map from "./Map";
import Section2 from "./Section2";
import Section3 from "./Section3";

import "./Home.css";
import Table2 from "./Table2";

const Home = () => {
  return (
    <React.Fragment>
      <div id="home-main-container">
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
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
