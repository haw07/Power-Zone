import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import avatar from "../Avatar";
function Profile() {
  const { email } = useParams();
  const [data, setData] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();
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
  const handleEdit = () => {
    navigate("/editprofileo/" + email);
  };
  return (
    <section className="bg-dark vh-100 h-100 p-5">
      <div className="d-flex m-auto">
        <div className="col-12 persProfCard m-auto">
          <div
            className="card cardMain pt-2 mt-5"
            style={{ backgroundColor: "#f36100" }}
          >
            <div className="text-center">
              <img
                src={data.gender === "M" ? avatar["male"] : avatar["female"]}
                alt="avatar"
                className="rounded-circle m-auto"
                height="300"
                width="300"
              />
              <div className="mt-3">
                <h5 className="text-black mb-3">
                  {data.userName + " " + data.lastName}
                </h5>
                <h5 className="text-black mb-3">{data.address}</h5>
                <h5 className="text-black mb-3">{data.phoneNumber}</h5>
                <h5 className="text-black mb-3">{data.email}</h5>
              </div>
              <div>
                <button
                  type="button"
                  className="btn bg-white mb-3 w-75"
                  style={{ color: "#f36100", border: "2px solid white" }}
                  onClick={handleEdit}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="secondCol mt-5">
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
            className="mt-4"
          >
            <div style={{ flex: "1 1 33.33%" }} className="mt-5">
              <div className="card mb-4 mb-md-0 cardBox mt-2">
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
