import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function OwnerProfile() {
  const location = useLocation();
  const info = useRef(location);
  const [showPage, setShowPage] = useState(
    "/oprofile/" + info.current.state.email
  );
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const changeColor = (id) => {
    const ids = ["ownerprofile", "addtrainer", "traineeslistowner", "trainerslist"];
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] !== id) document.getElementById(ids[i]).style.color = "white";
    }
    document.getElementById(id).style.color = "#f36100";
  };
  useEffect(() => {
    document.getElementById("ownerprofile").style.color = "#f36100";
  }, []);
  useEffect(() => {
    fetch(
      "https://localhost:7105/api/Account/GetUser/" + info.current.state.email
    )
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((err) => alert(err.message));
  }, []);
  useEffect(() => {
    fetch(
      "https://localhost:7105/api/Account/GetUser/" + info.current.state.email
    )
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => alert(err.message));
  }, []);
  const handleSignOut = () => {
    navigate("/logout", {
      state: { email: info.current.state.email },
    });
  };
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
                        src="https://github.com/mdo.png"
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
                        Owner
                      </span>
                    </div>
                    <div className="col-12 text-center fw-bold fs-3">
                      <span
                        class="d-none d-sm-block mx-1 text-center"
                        style={{ color: "#f36100" }}
                      >
                        {user.userName + " " + user.lastName}
                      </span>
                    </div>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark text-small shadow text-center">
                    <li>
                      <a
                        class="dropdown-item text-center"
                        onClick={() => {
                          setShowPage(
                            `/editprofileo/${info.current.state.email}`
                          );
                        }}
                      >
                        Edit Profile
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a
                        class="dropdown-item text-center"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
                <li class="nav-item">
                  <a
                    href="#"
                    onClick={() => {
                      changeColor("ownerprofile");
                      setShowPage("/oprofile/" + info.current.state.email);
                    }}
                    class="nav-link align-middle px-0"
                  >
                    <span className="fas fa-user me-2"></span>
                    <span
                      class="ms-1 d-none d-sm-inline fw-bold"
                      id="ownerprofile"
                    >
                      Profile
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    onClick={() => {
                      setShowPage("/addtrainer");
                      changeColor("addtrainer");
                    }}
                    class="nav-link align-middle px-0"
                  >
                    <span className="fa-solid fa-person me-2"></span>
                    <span
                      class="ms-1 d-none d-sm-inline fw-bold"
                      id="addtrainer"
                    >
                      Add Trainer
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    onClick={() => {
                      setShowPage("/traineeslistowner");
                      changeColor("traineeslistowner");
                    }}
                    class="nav-link align-middle px-0"
                  >
                    <span className="fas fa-edit me-2"></span>
                    <span
                      class="ms-1 d-none d-sm-inline fw-bold"
                      id="traineeslistowner"
                    >
                      LIST OF TRAINEES
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    onClick={() => {
                      setShowPage("/trainerslist");
                      changeColor("trainerslist");
                    }}
                    class="nav-link align-middle px-0"
                  >
                    <span className="fas fa-dumbbell me-2"></span>
                    <span class="d-none d-sm-inline fw-bold" id="trainerslist">
                      LIST OF TRAINERS
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
  );
}
export default OwnerProfile;
