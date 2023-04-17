import React, { useState } from 'react'
import OwnerData from './OwnerData'
import gymInfo from './gymInfo'
import { Link } from 'react-router-dom'
import { Dropdown, Table} from 'react-bootstrap'

function OwnerProfile() {
  const [data, setDate] = useState(gymInfo);
  return (
    <section className="bg-dark mainPart">
      <div className='d-flex'>
      <div className="col-12 persProfCard ">
        <div className="card mainCard" style={{ backgroundColor: "#f36100" }}>
          <div className="card-body text-center pt-4">
            <img
              src="https://github.com/mdo.png"
              alt="avatar"
              className="rounded-circle img-fluid m-auto"
              style={{ width: "300px", border: "10px solid white" }}
            />
            <h5 className="my-3 pt-2 text-black fw-bold">
              {OwnerData[0].firstName} {OwnerData[0].lastName}
            </h5>
            <p className="text-black mb-4 fw-bold">{OwnerData[0].Address}</p>
          </div>
        </div>
        {/* </div>
          <div class="col-12"> */}
        <div
          className="card mb-4 cardDetails"
          style={{ backgroundColor: "#f36100" }}
        >
          <div className="card-body">
            <div className="row" style={{ marginLeft: "8rem" }}>
              <div className="col-sm-5">
                <p className="mb-0 text-black fw-bold">First Name</p>
              </div>
              <div className="col-sm-7">
                <p className="mb-0" style={{ color: "white" }}>
                  {OwnerData[0].firstName}
                </p>
              </div>
            </div>
            <hr />
            <div className="row" style={{ marginLeft: "8rem" }}>
              <div className="col-sm-5">
                <p className="mb-0 text-black fw-bold">Last Name</p>
              </div>
              <div className="col-sm-7">
                <p className="mb-0" style={{ color: "white" }}>
                  {OwnerData[0].lastName}
                </p>
              </div>
            </div>
            <hr />
            <div className="row" style={{ marginLeft: "8rem" }}>
              <div className="col-sm-5">
                <p className="mb-0 text-black fw-bold">Email</p>
              </div>
              <div className="col-sm-7">
                <p className="mb-0" style={{ color: "white" }}>
                  {OwnerData[0].Email}
                </p>
              </div>
            </div>
            <hr />
            <div className="row" style={{ marginLeft: "8rem" }}>
              <div className="col-sm-5">
                <p className="mb-0 text-black fw-bold">Phone</p>
              </div>
              <div className="col-sm-7">
                <p className="mb-0" style={{ color: "white" }}>
                  {OwnerData[0].Phone}
                </p>
              </div>
            </div>
            <hr />
            <div className="row" style={{ marginLeft: "8rem" }}>
              <div className="col-sm-5 ">
                <p className="mb-0 text-black fw-bold">Address</p>
              </div>
              <div className="col-sm-7">
                <p className="mb-0" style={{ color: "white" }}>
                  {OwnerData[0].Address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondCol mt-5">
        <h2 className="bodyStatTitle fw-bold" style={{ color: "#f36100" }}>
          Main Info
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ flex: "1 1 33.33%" }}>
            <div className="card mb-4 mb-md-0 cardBox">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-black font-italic me-1 fw-bold fs-5">
                    Number of Classes
                  </span>
                </p>
                <p
                  className="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  {gymInfo[0].nbClasses} classes
                </p>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 100%" }}>
            <div className="card mb-4 mb-md-0 cardBox">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-black font-italic me-1 fw-bold">
                    Number of Trainees
                  </span>
                </p>
                <p
                  className="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  {gymInfo[0].nbTrainees}
                </p>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 100%" }}>
            <div className="card mb-4 mb-md-0 cardBox">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-black font-italic me-1 fw-bold">
                    Number of Trainers
                  </span>
                </p>
                <p
                  className="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  {gymInfo[0].nbTrainers}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default OwnerProfile