import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import avatar from "../Avatar";
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
    navigate("/oprofile/" + email);
  };
  const handleCancel = () => {
    navigate("/oprofile/" + email);
  };
  return (
    <section className="bg-dark persProfileEditSect">
      <div className="col-12 persProfCard m-auto">
        <div className="card mainCard" style={{ backgroundColor: "#f36100" }}>
          <div className="card-body text-center pt-4">
            <img
              src={user.gender === "M" ? avatar["male"] : avatar["female"]}
              alt="avatar"
              className="rounded-circle m-auto"
              height="300"
              width="300"
            />
            <h5 className="my-3 pt-2 text-black fw-bold">
              {user.userName} {user.lastName}
            </h5>
            <p className="text-black mb-4 fw-bold">{user.address}</p>
          </div>
        </div>
        <div
          className="card mb-4 cardEditDetails"
          style={{ backgroundColor: "#f36100" }}
        >
          <div className="card-body cardEdit">
            <div className="row">
              <div className="col-sm-5">
                <p className="mb-0 text-black fw-bold text-end">First Name</p>
              </div>
              <div className="col-sm-7">
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
            <div className="row">
              <div className="col-sm-5">
                <p
                  className="mb-0 text-black fw-bold text-center"
                  style={{ marginLeft: "8.3rem" }}
                >
                  Last Name
                </p>
              </div>
              <div className="col-sm-7">
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
            <div className="row">
              <div className="col-sm-5">
                <p
                  className="mb-0 text-black fw-bold text-left"
                  style={{ marginLeft: "8.4rem" }}
                >
                  Email
                </p>
              </div>
              <div className="col-sm-7">
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
            <div className="row">
              <div className="col-sm-5">
                <p
                  className="mb-0 text-black fw-bold text-left"
                  style={{ marginLeft: "8.4rem", color: "black" }}
                >
                  Phone
                </p>
              </div>
              <div className="col-sm-7">
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
            <div className="row">
              <div className="col-sm-5 ">
                <p
                  className="text-black fw-bold text-left"
                  style={{ marginLeft: "8.4rem" }}
                >
                  Address
                </p>
              </div>
              <div className="col-sm-7">
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
            <div className="row">
              <div className="col-sm-5">
                <p
                  className="mb-0 text-black fw-bold text-center genderEditBox"
                  style={{ marginLeft: "8.3rem" }}
                >
                  Gender
                </p>
              </div>
              <div className="col-sm-7 text-white">{user.gender}</div>
            </div>
          </div>
          <div className="m-auto btnsBar">
            <button
              type="button"
              className="btn SaveBtn"
              style={{ backgroundColor: "black" }}
              onClick={handleSave}
            >
              <Link to="/ownerprofile">Save</Link>
            </button>
            <button
              type="button"
              className="btn CancelBtn"
              style={{ backgroundColor: "black" }}
              onClick={handleCancel}
            >
              <Link to="/ownerprofile">Cancel</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProfileO;
