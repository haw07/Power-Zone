import { useState, useEffect } from "react";
import data from "./TrainerData";

function SidebarT() {
    const [showPage, setShowPage] = useState("/tprofile");
    const [user, setUser] = useState(data[0]);
    const changeColor = (id) => {
      const ids = ["bmi", "profile", "traineeslist", "arrangeclass", "tschedule"];
      for (let i = 0; i < ids.length; i++) {
        if (ids[i] !== id) document.getElementById(ids[i]).style.color = "white";
      }
      document.getElementById(id).style.color = "#f36100";
    };
    useEffect(() => {
      document.getElementById("profile").style.color = "#f36100";
    }, []);
    return (
      <section style={{ backgroundColor: "#111111" }}>
        <div class="container-fluid ">
          <div class="row flex-nowrap">
            <div class="col-2 px-sm-2 px-0 bg-dark">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul
                  class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <div class="dropdown pb-4 mt-5">
                    <a
                      href="#"
                      class="d-flex align-items-center row"
                      style={{ color: "#f36100" }}
                      id="dropdownUser1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="col-12">
                        <img
                          src={user.url}
                          style={{ border: "5px solid #f36100" }}
                          alt="hugenerd"
                          width="200"
                          height="200"
                          class="rounded-circle mb-2"
                        />
                      </div>
                      <div className="col-12 text-center fw-bold fs-3">
                        <span
                          class="d-none d-sm-block mx-1 text-center"
                          style={{ color: "#f36100" }}
                        >
                          {user.firstName + " " + user.lastName}
                        </span>
                      </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow text-center">
                      <li>
                        <a class="dropdown-item text-center" href="/editprofilet">
                          Edit Profile
                        </a>
                      </li>
                      <hr />
                      <li>
                        <a class="dropdown-item text-center" href="/logout">
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                  <li class="nav-item">
                    <a
                      href="#"
                      onClick={() => {
                        changeColor("profile");
                        setShowPage("/personalprofile");
                      }}
                      class="nav-link align-middle px-0"
                    >
                      <span className="fas fa-user me-2"></span>
                      <span class="ms-1 d-none d-sm-inline fw-bold" id="profile">
                        Profile
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      onClick={() => {
                        setShowPage("/tschedule");
                        changeColor("tschedule");
                      }}
                      class="nav-link align-middle px-0"
                    >
                      <span className="fas fa-table me-2"></span>
                      <span class="ms-1 d-none d-sm-inline fw-bold" id="schedule">
                        YOUR SCHEDULE
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      onClick={() => {
                        setShowPage("/traineeslist");
                        changeColor("traineeslist");
                      }}
                      class="nav-link align-middle px-0"
                    >
                      <span className="fas fa-edit me-2"></span>
                      <span class="ms-1 d-none d-sm-inline fw-bold" id="book">
                        LIST OF TRAINEES
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      onClick={() => {
                        setShowPage("/arrangeclass");
                        changeColor("arrangeclass");
                      }}
                      class="nav-link align-middle px-0"
                    >
                      <span className="fas fa-dumbbell me-2"></span>
                      <span class="d-none d-sm-inline fw-bold" id="bmi">
                        ARRANGE A CLASS
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      onClick={() => {
                        setShowPage("/bmi");
                        changeColor("bmi");
                      }}
                      class="nav-link align-middle px-0"
                    >
                      <span className="fas fa-ruler me-2"></span>
                      <span class="d-none d-sm-inline fw-bold" id="bmi">
                        BODY MASS INDEX
                      </span>
                    </a>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
            <iframe src={showPage} frameborder="0" className="col-md-10 py-3">
              Content area...
            </iframe>
          </div>
        </div>
      </section>
  )
}

export default SidebarT