import React, { useEffect } from "react";
import "./Table1.css";
import table5 from "../../xls/table5.json";
const Table1 = () => {
  // ------------------------------------------------

  const data = table5.map((d) => {
    return (
      <tr key={d["IP"]}>
        <td> {d["IP"]}</td>
        <td className="Vulnerability">
          <p>{d["Vulnerability"]}</p>
        </td>
        <td>{d["Base score"]}</td>
        <td>{d["severity level"]}</td>
      </tr>
    );
  });

  // ------------------------------------------------

  return (
    <table id="table-1">
      <thead>
        <tr>
          <th>IP</th>
          <th>Vulnerability</th>
          <th>Base score</th>
          <th>severity level</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};
export default Table1;
