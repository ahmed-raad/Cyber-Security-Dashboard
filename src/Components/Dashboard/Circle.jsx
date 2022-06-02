import React, { useEffect } from "react";
import Plot from "react-plotly.js";

import "./Circle.css";

const Circle = () => {
  return (
    <div id="circle-container">
      <span id="scatter-numbers">
        5 - Optimal <br />
        4 - Managed <br />
        3 - Defined <br />
        2 - Acknowledged <br />
        1 - Initial <br />
        0 - Non-existent <br />
      </span>
      <Plot
        data={[
          {
            type: "scatterpolar",
            r: [
              3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            ],
            theta: [
              "(ID.AM)  ",
              "(ID.BE) ",
              "(ID.GV)",
              "(ID.RA) ",
              " (ID.RM)  ",
              "(ID.SC)  ",
              "(PR.AC)",
              "(PR.AT)",
              " (PR.DS)",
              "(PR.IP)",
              " (PR.MA)",
              "(PR.PT)",
              "(DE.AE)",
              "(DE.CM)",
              "(DE.DP)",
              "(RS.RP)",
              "(RS.CO)",
              "(RS.AN)",
              "(RS.MI)",
              "(RS.IM)",
              "(RC.RP)",
              "(RC.IM)",
              "(RC.CO)",
            ],
            fill: "toself",
            name: "target score",
          },
          {
            type: "scatterpolar",
            r: [
              2.7, 2, 1.2, 3, 4, 2, 3, 1, 3, 3, 1, 4, 2, 5, 2, 3, 1, 4, 5, 2, 2,
              3, 3, 3,
            ],
            theta: [
              "(ID.AM)  ",
              "(ID.BE) ",
              "(ID.GV)",
              "(ID.RA) ",
              " (ID.RM)  ",
              "(ID.SC)  ",
              "(PR.AC)",
              "(PR.AT)",
              " (PR.DS)",
              "(PR.IP)",
              " (PR.MA)",
              "(PR.PT)",
              "(DE.AE)",
              "(DE.CM)",
              "(DE.DP)",
              "(RS.RP)",
              "(RS.CO)",
              "(RS.AN)",
              "(RS.MI)",
              "(RS.IM)",
              "(RC.RP)",
              "(RC.IM)",
              "(RC.CO)",
            ],
            fill: "toself",
            name: "practice score",
          },
        ]}
        layout={{
          polar: {
            radialaxis: {
              visible: true,
              range: [0, 5],
            },
          },
          showlegend: true,
          height: 500,
          width: 1000,
        }}
      />
    </div>
  );
};
export default Circle;
