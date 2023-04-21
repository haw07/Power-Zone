import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { email } = useParams();
  const [data, setData] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7105/api/Account/GetUser/" + email)
      .then((resp) => resp.json())
      .then((d) => setData(d))
      .catch((err) => alert(err.message));
    fetch("https://localhost:7105/api/Account")
      .then((resp) => resp.json())
      .then((d) => setAccounts(d))
      .catch((err) => alert(err.message));
    fetch("https://localhost:7105/api/GymClass")
      .then((resp) => resp.json())
      .then((d) => setClasses(d))
      .catch((err) => alert(err.message));
  }, []);
  const trainers = accounts.filter((person) => person.role === "Coach");
  const trainees = accounts.filter((person) => person.role === "User");
  return (
    <section className="bg-dark mainPart">
      <div className="d-flex">
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
                {data.userName} {data.lastName}
              </h5>
              <p className="text-black mb-4 fw-bold">{data.address}</p>
            </div>
          </div>
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
                    {data.userName}
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
                    {data.lastName}
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
                    {data.email}
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
                    {data.phoneNumber}
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
                    {data.address}
                  </p>
                </div>
              </div>
              <hr />
              <div className="row" style={{ marginLeft: "8rem" }}>
                <div className="col-sm-5 ">
                  <p className="mb-0 text-black fw-bold">Gender</p>
                </div>
                <div className="col-sm-7">
                  <p className="mb-0" style={{ color: "white" }}>
                    {data.gender}
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
                    {classes.length} classes
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
                    {trainees.length}
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
                    {trainers.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
