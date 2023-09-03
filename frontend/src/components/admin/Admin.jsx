import React, { useEffect, useState } from "react";
import { JsonToExcel } from "react-json-to-excel";

import "./Admin.css";

function Admin() {
  const [responses, setresponses] = useState([]);
  const getAssociates = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/getAssociates", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resPonse = await response.json();
      console.log(resPonse);
      setresponses(resPonse);
    } catch (err) {
      console.log("Error" + err);
    }
  };

  useEffect(() => {
    getAssociates();
  }, []);

  return (
    <div className="admin">
      <span className="header">
        Welcome to <span className="headerPink">Admin Pannel</span>
      </span>
      <div className="admin-boxes">
        <div className="data-box">
          <h3>
            Registrations -{" "}
            <span style={{ color: "var(--btn-bg" }}>Associates</span>
          </h3>
          <span>Total Responses : 10</span>
          <JsonToExcel
            title="Download in Excel"
            data={responses}
            fileName="sample-file"
            btnClassName="adminBtn"
          />
        </div>
        <div className="data-box">
          <h3>
            Registrations -{" "}
            <span style={{ color: "var(--btn-bg" }}>Associates</span>
          </h3>
          <span>Total Responses : 10</span>
          <JsonToExcel
            title="Download in Excel"
            data={responses}
            fileName="sample-file"
            btnClassName="adminBtn"
          />
        </div>
        <div className="data-box">
          <h3>
            Registrations -{" "}
            <span style={{ color: "var(--btn-bg" }}>Associates</span>
          </h3>
          <span>Total Responses : 10</span>
          <JsonToExcel
            title="Download in Excel"
            data={responses}
            fileName="sample-file"
            btnClassName="adminBtn"
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;
