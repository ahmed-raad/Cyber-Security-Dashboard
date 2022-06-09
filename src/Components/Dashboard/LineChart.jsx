import React, { useEffect } from "react";
import Plot from "react-plotly.js";

const LineChart = () => {
  return (
    <div id="line-chart-container">
      <Plot
        data={[
          {
            x: ["22/04/2022", "29/05/2022", "08/06/2022"],
            y: [1048037, 1049534, 1109829],

            name: "Total CVEs number",
            type: "scatter",
          },

          {
            x: ["22/04/2022", "29/05/2022", "08/06/2022"],
            y: [7.67526666, 7.6540101695, 7.6600367],
            name: "Base score",
            yaxis: "y2",
            type: "scatter",
          },
          {
            x: ["22/04/2022", "29/05/2022", "08/06/2022"],
            y: [1000, 1000, 1000],
            name: "Number of connected addresses",
            yaxis: "y3",
            type: "scatter",
          },
        ]}
        layout={{
          //   title: "multiple y-axes example",
          width: 1200,
          height: 500,
          xaxis: { showgrid: false, domain: [0.1, 0.7] },
          yaxis: {
            title: "Total CVEs number",
            titlefont: { color: "blue" },
            tickfont: { color: "blue" },
            showgrid: false,
            range: [1000000, 1300000],
          },

          yaxis2: {
            title: "Base score",
            titlefont: { color: "red" },
            tickfont: { color: "red" },
            overlaying: "y",
            anchor: "x",
            position: 1,
            showgrid: false,
            range: [7.64, 7.68],
            side: "right",
          },
          yaxis3: {
            title: "Number of connected addresses",
            titlefont: { color: "green" },
            tickfont: { color: "green" },
            overlaying: "y",
            side: "right",
            position: 0.8,
            showgrid: false,
            range: [0, 2000],
            tickvals: [0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000],
          },

          legend: {
            x: 0.32,
            y: 1,
            traceorder: "normal",
            font: {
              family: "sans-serif",
              size: 12,
              color: "#000",
            },
          },
        }}
      />
    </div>
  );
};
export default LineChart;
