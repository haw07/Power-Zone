import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import avatar from "../Avatar";
function EditProfile() {
  const { email } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://localhost:7105/api/Account/GetUser/${email}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((error) => alert(error));
  }, []);
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
    navigate("/personalprofile/" + email + "/" + true);
  };
  const handleCancel = () => {
    navigate("/personalprofile/" + email + "/" + true);
  };
  return (
    <section className="bg-dark persProfileEditSect">
      <div className="col-12 persProfCard m-auto">
        <div className="card mainCard" style={{ backgroundColor: "#f36100" }}>
          <div className="card-body text-center pt-4">
            <img
              src={user.gender === "M" ? avatar["male"] : avatar["female"]}
              alt="avatar"
              height="300"
              width="300"
              className="rounded-circle m-auto"
            />
            <h5 className="my-3 pt-2 text-black fw-bold">
              {user.userName + " " + user.lastName}
            </h5>
            <p className="text-black mb-4 fw-bold">{user.address}</p>
          </div>
        </div>
        <div
          className="card mb-4 cardEditDetails"
          style={{ backgroundColor: "#f36100" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-sm-5">
                <p className="mb-0 text-black fw-bold text-end">First Name</p>
              </div>
              <div className="col-sm-7">
                <input
                  type="text"
                  placeholder="Your First Name"
                  style={{ color: "#f36100" }}
                  value={user.userName}
                  className="ps-3"
                  name="userName"
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
                  value={user.lastName}
                  className="ps-3"
                  name="lastName"
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
                  value={user.email}
                  style={{ color: "#f36100" }}
                  className="ps-3"
                  name="email"
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
                  value={user.phoneNumber}
                  className="ps-3"
                  name="phoneNumber"
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
                  value={user.address}
                  className="ps-3"
                  name="address"
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
          <div className="m-auto">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "black" }}
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "black" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProfile;
