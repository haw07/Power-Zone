import "./style.css";
import data from "./userData";
import { useState } from "react";
function Profile() {
  const [user, setUser] = useState(data[0]);
  return (
    <section className="bg-dark h-100">
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <div class="card mb-4" style={{ backgroundColor: "#f36100" }}>
              <div class="card-body text-center">
                <img
                  src={user.url}
                  alt="avatar"
                  class="rounded-circle img-fluid m-auto"
                  style={{ width: "150px" }}
                />
                <h3 class="my-3 text-black fw-bold">
                  {user.firstName + " " + user.lastName}
                </h3>
                <p class="text-black mb-4 fw-bold">{user.address}</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card mb-4" style={{ backgroundColor: "#f36100" }}>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0 text-black fw-bold">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="mb-0 text-white">
                      {user.firstName + " " + user.lastName}
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0 text-black fw-bold"> Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="mb-0 text-white">{user.email}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0 text-black fw-bold">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="mb-0 text-white">{user.phone}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0 text-black fw-bold">Gender</p>
                  </div>
                  <div class="col-sm-9 ">
                    <p class="mb-0 text-white">{user.gender}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3 ">
                    <p class="mb-0 text-black fw-bold"> Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="mb-0 text-white">{user.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card mb-md-0 h-50"
              style={{ backgroundColor: "#f36100" }}
            >
              <div class="card-body">
                <p class="mb-4">
                  <span class="text-black font-italic me-1 fw-bold">
                    Assesment
                  </span>
                </p>
                <p
                  class="mb-1 fw-bold"
                  style={{ fontSize: ".77rem", color: "black" }}
                >
                  Progress
                </p>
                <div
                  class=" rounded"
                  style={{ height: "5px", color: "#f36100" }}
                >
                  <progress
                    min="0"
                    max="100"
                    value="80"
                    style={{ backgroundColor: "#f36100" }}
                    className="w-100"
                  ></progress>
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
