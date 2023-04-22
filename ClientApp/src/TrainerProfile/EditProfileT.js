import React from "react";
import data from "./TrainerData";
import avatar from "../Avatar";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditProfileT() {
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
    navigate("/tprofile/" + email + "/" + true);
  };
  const handleCancel = () => {
    navigate("/tprofile/" + email + "/" + true);
  };
  return (
    <section className="bg-dark persProfileEditSect">
      <div class="col-12 persProfCard m-auto">
        <div class="card mainCard" style={{ backgroundColor: "#f36100" }}>
          <div class="card-body text-center pt-4">
            <img
              src={user.gender === "M" ? avatar["male"] : avatar["female"]}
              alt="avatar"
              class="rounded-circle m-auto"
              width="300"
              height="300"
            />
            <h5 class="my-3 pt-2 text-black fw-bold">
              {user.userName} {user.lastName}
            </h5>
            <p class="text-black mb-4 fw-bold">{user.address}</p>
          </div>
        </div>
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
              onChange={handleChange}
            >
              <Link to="/tprofile">Save</Link>
            </button>
            <button
              type="button"
              class="btn CancelBtn"
              style={{ backgroundColor: "black" }}
              onClick={handleCancel}
            >
              <Link to="/trainerprofile">Cancel</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProfileT;
