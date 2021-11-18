import { CFormSelect } from "@coreui/react";
import React from "react";
import "./IdQueryFrom.css";

const IdQueryForm = () => {
  return (
    <div>
      <div className="heading_form">
        <h3>নিচে ফর্ম পূরণ করে Submit Button টী চাপুন :</h3>
      </div>
      <div className="form-page border bg-light">
        <div className="p-3 d-flex justify-content-between">
          <div className="col-md-6 sm-12">
            <div className="d-flex mb-3">
              <h5>Class </h5>
              <CFormSelect
                size="sm"
                className="mb-3"
                aria-label="Small select example"
                className="ms-5"
              >
                <option>Select Level</option>
                <option value="1">Six</option>
                <option value="2">Seven</option>
                <option value="3">Eight</option>
                <option value="4">Nine</option>
                <option value="5">Ten</option>
                <option value="6">Ssc Examinee</option>
              </CFormSelect>
            </div>
            <div className="d-flex mb-3">
              <h5>Section</h5>
              <CFormSelect
                size="sm"
                className="mb-3"
                aria-label="Small select example"
                className="ms-4"
              >
                <option>select section</option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
                <option value="4">D</option>
              </CFormSelect>
            </div>
            <div className="d-flex mb-3">
              <h5>Session</h5>
              <CFormSelect
                size="sm"
                className="mb-3"
                aria-label="Small select example"
                className="ms-4 p-1"
              >
                <option>select session</option>
                <option value="1">2018</option>
                <option value="2">2019</option>
                <option value="3">2020</option>
                <option value="4">2021</option>
              </CFormSelect>
            </div>
            <div className="d-flex mb-3">
              <h5>Roll</h5>
              <input className="ms-5" type="number" />
            </div>
          </div>
          <div className="d-flex align-items-center">
          <button type="button" class="btn btn-outline-danger">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdQueryForm;
