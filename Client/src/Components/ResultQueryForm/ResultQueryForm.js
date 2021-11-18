import React from "react";
import { CForm, CFormInput, CFormLabel, CFormSelect } from "@coreui/react";
import "./ResultQueryForm.css";
const ResultQuery = () => {
  return (
    <>
      <div className="heading_form">
        <h3>নিচে ফর্ম পূরণ করে Submit Button টী চাপুন :</h3>
      </div>

      <div className="form-page border bg-light">
        <div className="p-3 d-flex justify-content-between">
          <div className="col-md-6 sm-12">
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                Please Enter Student ID (xxyyzzz) :
                </CFormLabel>
                <CFormInput
                  type="Number"
                  id="exampleFormControlInput1"
                  placeholder="123456"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">
                * Term :
                </CFormLabel>
                <CFormSelect
                size="sm"
                className="mb-3"
                aria-label="Small select example"
                className="ms-5"
              >
                <option>Select term</option>
                <option value="1">First Term Examination</option>
                <option value="2">Annual Examination</option>
                <option value="3">Test/Modal Test Examination</option>
              </CFormSelect>
              </div>
            </CForm>
            <div className="d-flex mb-3">
              
            </div>
            <div className=" mb-3">
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
            <button type="button" class="btn btn-outline-danger">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultQuery;
