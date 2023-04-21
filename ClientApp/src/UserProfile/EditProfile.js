import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
    navigate("/profile", {
      state: { email: email },
    });
  };
  const handleCancel = () => {
    navigate("/profile", {
      state: { email: email },
    });
  };
  return (
    <section className="bg-dark persProfileEditSect">
      <div class="col-12 persProfCard m-auto">
        <div class="card mainCard" style={{ backgroundColor: "#f36100" }}>
          <div class="card-body text-center pt-4">
            <img
              src={user.imgURL}
              alt="avatar"
              height="300"
              width="300"
              class="rounded-circle m-auto"
              style={{ width: "300px", border: "10px solid white" }}
            />
            <h5 class="my-3 pt-2 text-black fw-bold">
              {user.userName + " " + user.lastName}
            </h5>
            <p class="text-black mb-4 fw-bold">{user.address}</p>
          </div>
        </div>
        <div
          class="card mb-4 cardEditDetails"
          style={{ backgroundColor: "#f36100" }}
        >
          <div class="card-body">
            <div class="row">
              <div class="col-sm-5">
                <p class="mb-0 text-black fw-bold text-end">First Name</p>
              </div>
              <div class="col-sm-7">
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
                  value={user.lastName}
                  className="ps-3"
                  name="lastName"
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
                  value={user.email}
                  style={{ color: "#f36100" }}
                  className="ps-3"
                  name="email"
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
                  value={user.phoneNumber}
                  className="ps-3"
                  name="phoneNumber"
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
                  value={user.address}
                  className="ps-3"
                  name="address"
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
          <div class="m-auto">
            <button
              type="button"
              class="btn"
              style={{ backgroundColor: "black" }}
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              class="btn"
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
