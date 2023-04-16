import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
function UserProfile() {
  const location = useLocation();
  const data = useRef(location.state);
  const [showPage, setShowPage] = useState(
    "/personalprofile/" + data.current.email
  );
  const [user, setUser] = useState({
    userName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    height: "",
    weight: "",
    imgURL: "",
  });
  useEffect(() => {
    fetch(`https://localhost:7105/api/Account/GetUser/${data.current.email}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((error) => alert(error));
  }, []);
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
                        src={user.imgURL}
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
                        {user.userName + " " + user.lastName}
                      </span>
                    </div>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark text-small shadow text-center">
                    <li>
                      <a
                        class="dropdown-item text-center"
                        href={`/editprofile/${user.email}`}
                      >
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
                      setShowPage(`/personalprofile/${data.current.email}`);
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
export default UserProfile;
