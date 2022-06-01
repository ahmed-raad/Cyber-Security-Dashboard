import React from "react";
import table4 from "../../xls/table4.json";
import "./Table2.css";
const Table2 = () => {
  // ------------------------------------------------

  const data = table4.map((d) => {
    return (
      <tr key={d["CVE ID"]}>
        <td> {d["CVE ID"]}</td>
        <td className="CVE description">
          <p>{d["CVE description"]}</p>
        </td>
        <td>{d["NIST subcategory ID"]}</td>
        <td>
          <p>{d["NIST subcategory description"]}</p>
        </td>
      </tr>
    );
  });

  // ------------------------------------------------

  return (
    <table id="table-2">
      <thead>
        <tr>
          <th>CVE ID</th>
          <th>CVE description</th>
          <th>NIST subcategory ID</th>
          <th>NIST subcategory description</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};
export default Table2;
