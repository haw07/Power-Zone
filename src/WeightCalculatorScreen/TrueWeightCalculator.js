import React, { useState, useEffect } from "react";

function TrueWeightCalculator() {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(0);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const calculateBMI = () => {
    let res = undefined;
    if (weight && height) {
      res = weight / (height * height * Math.pow(10, -4));
      setResult(Math.round(res));
      setShow(!show);
    }
    setAge("");
    setWeight("");
    setHeight("");
    setSex("");
  };
  const getStatus = () => {
    if (result < 18.5) {
      return "Underweight";
    } else if (result < 24.9) {
      return "Healthy";
    } else if (result < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  return (
    <div className="mt-4">
      <div className="mb-5 text-center">
        <h3 className="text-white fst-italic">CALCULATE YOUR BMI</h3>
      </div>
      <div className="row mb-5 ms-3" style={{ height: "3.3rem" }}>
        <div className="col-lg-6">
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            id="height"
            className="form-control bg-transparent text-white mb-3 me-3 h-75 border border-white rounded ps-3"
            type="text"
            placeholder="Height / cm"
          />
        </div>
        <div className="col-lg-6">
          <select
            className="form-select form-select form-control bg-transparent mb-3 border text-white border-white rounded"
            aria-label=".form-select example"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            id="sex"
          >
            <option style={{ color: "black" }} selected>
              Sex
            </option>
            <option style={{ color: "black" }} value="Male">
              Male
            </option>
            <option style={{ color: "black" }} value="Female">
              Female
            </option>
          </select>
        </div>
      </div>
      <div className="row mb-5 ms-3">
        <div className="col-lg-6 mb-2">
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
            className="form-control bg-transparent text-white mb-3 border h-100 border-white rounded ps-3"
            type="text"
            placeholder="Weight / Kg"
          />
        </div>
        <div className="col-lg-6">
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            id="age"
            className="form-control bg-transparent text-white mb-3 me-3 h-100 border border-white rounded ps-3"
            type="text"
            placeholder="Age"
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn text-white btn-block w-100 h-100"
          style={{ backgroundColor: "#f36100" }}
          onClick={() => calculateBMI()}
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          id="cal"
        >
          CALCULATE
        </button>
      </div>

      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h3 className="modal-title text-center text-white">Result</h3>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <div className="text-white">
                <h3 className="mb-3">
                  YOUR BMI =
                  <h2 className="ms-3 d-inline" style={{ color: "#f36100" }}>
                    {result}
                  </h2>
                </h3>
                <h3>
                  YOU ARE
                  <h2 className="ms-3 d-inline" style={{ color: "#f36100" }}>
                    {getStatus()}
                  </h2>
                </h3>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-block w-100 text-white"
                data-bs-dismiss="modal"
                style={{ backgroundColor: "#f36100" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TrueWeightCalculator;
