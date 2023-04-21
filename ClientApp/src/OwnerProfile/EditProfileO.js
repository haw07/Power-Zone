import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function EditProfileO() {
  const { email } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7105/api/Account/GetUser/" + email)
      .then((resp) => resp.json())
      .then((d) => setUser(d))
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
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSave = () => {
    fetch("https://localhost:7105/api/Account/" + email, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).catch((err) => alert(err));
    navigate("/tprofile/" + email, {
      state: { email: email },
    });
  };
  const handleCancel = () => {
    navigate("/tprofile/" + email, {
      state: { email: email },
    });
  };
  return (
    <section className="bg-dark persProfileEditSect">
      <div class="col-12 persProfCard">
        <div class="card mainCard" style={{ backgroundColor: "#f36100" }}>
          <div class="card-body text-center pt-4">
            <img
              src="https://github.com/mdo.png"
              alt="avatar"
              class="rounded-circle img-fluid m-auto"
              style={{ width: "300px", border: "10px solid white" }}
            />
            <h5 class="my-3 pt-2 text-black fw-bold">
              {user.userName} {user.lastName}
            </h5>
            <p class="text-black mb-4 fw-bold">{user.address}</p>
          </div>
        </div>
        {/* </div>
          <div class="col-12"> */}
        <div
          class="card mb-4 cardEditDetails"
          style={{ backgroundColor: "#f36100" }}
        >
          <div class="card-body cardEdit">
            <div class="row">
              <div class="col-sm-5">
                <p class="mb-0 text-black fw-bold text-end">First Name</p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your First Name"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                  name="userName"
                  value={user.userName}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <p
                  class="mb-0 text-black fw-bold text-center"
                  style={{ marginLeft: "8.3rem" }}
                >
                  Last Name
                </p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your Last Name"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <p
                  class="mb-0 text-black fw-bold text-left"
                  style={{ marginLeft: "8.4rem" }}
                >
                  Email
                </p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your Email"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <p
                  class="mb-0 text-black fw-bold text-left"
                  style={{ marginLeft: "8.4rem", color: "black" }}
                >
                  Phone
                </p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your Phone"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5 ">
                <p
                  class="text-black fw-bold text-left"
                  style={{ marginLeft: "8.4rem" }}
                >
                  Address
                </p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your Email"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <p
                  class="mb-0 text-black fw-bold text-center genderEditBox"
                  style={{ marginLeft: "8.3rem" }}
                >
                  Gender
                </p>
              </div>
              <div class="col-sm-7 text-white">{user.gender}</div>
            </div>
          </div>
          <div class="m-auto btnsBar">
            <button
              type="button"
              class="btn SaveBtn"
              style={{ backgroundColor: "black" }}
              onClick={handleSave}
            >
              <Link to="/ownerprofile">Save</Link>
            </button>
            <button
              type="button"
              class="btn CancelBtn"
              style={{ backgroundColor: "black" }}
              onClick={handleCancel}
            >
              <Link to="/ownerprofile">Cancel</Link>
            </button>
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
    </section>
  );
}

export default EditProfileO;
