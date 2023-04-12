import { useState, useEffect } from "react";
function Sidebar() {
  const [showPage, setShowPage] = useState("/personalprofile");
  const changeColor = (id) => {
    const ids = ["bmi", "book", "schedule", "profile"];
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
          <div class="col-auto col-md-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li class="nav-item">
                  <a
                    href="#"
                    onClick={() => {
                      changeColor("profile");
                      setShowPage("/personalprofile");
                    }}
                    class="nav-link align-middle px-0"
                  >
                    <span className="fas fa-house me-2"></span>
                    <span class="ms-1 d-none d-sm-inline fw-bold" id="profile">
                      Profile
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    onClick={() => {
                      changeColor("schedule");
                      setShowPage("/schedule");
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
                      changeColor("book");
                      setShowPage("/bookclass");
                    }}
                    class="nav-link align-middle px-0"
                  >
                    <span className="fas fa-edit me-2"></span>
                    <span class="ms-1 d-none d-sm-inline fw-bold" id="book">
                      BOOK CLASSES
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
              <div class="dropdown pb-4">
                <a
                  href="#"
                  class="d-flex align-items-center text-decoration-none dropdown-toggle"
                  style={{ color: "#f36100" }}
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    class="rounded-circle"
                  />
                  <span
                    class="d-none d-sm-inline mx-1"
                    style={{ color: "#f36100" }}
                  >
                    loser
                  </span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a class="dropdown-item" href="logout">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <iframe src={showPage} frameborder="0" class="col-md-10 py-3">
            Content area...
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
