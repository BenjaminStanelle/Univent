import React from "react";
import Select from "react-select";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from "antd";

const techCompanies = [
  { label: "NSA", value: 1 },
  { label: "SASE", value: 2 },
  { label: "Google Club", value: 3 },
  { label: "Tesla Society", value: 4 },
  { label: "Amazon World", value: 5 },
  { label: "Alpha Beta Theta", value: 6 },
];

const Drop = () => (
  <Row className="row" style={{ float: "none" }}>
    <p>Dropdown</p>
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Select options={techCompanies} />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  </Row>
);

export default Drop;
