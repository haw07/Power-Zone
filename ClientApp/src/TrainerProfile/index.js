import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
function TrainerProfile() {
  const [user, setUser] = useState([]);
  const location = useLocation();
  const data = useRef(location);
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(
    `/tprofile/${data.current.state.email}/${true}`
  );
  useEffect(() => {
    fetch(
      "https://localhost:7105/api/Account/GetUser/" + data.current.state.email
    )
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => alert(err.message));
  }, []);
  const changeColor = (id) => {
    const ids = ["bmi", "profile", "traineeslisttrainer", "schedule"];
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] !== id) document.getElementById(ids[i]).style.color = "white";
    }
    document.getElementById(id).style.color = "#f36100";
  };
  useEffect(() => {
    document.getElementById("profile").style.color = "#f36100";
  }, []);
  const handleLogOut = () => {
    navigate("/logout", {
      state: { email: data.current.state.email },
    });
  };
  return (
    <section style={{ backgroundColor: "#111111" }} className="overflow-hidden">
      <div className="row flex-nowrap">
        <div className="col-2 px-sm-0 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start m-auto"
              id="menu"
            >
              <li className="nav-item mb-2">
                <a
                  href="#"
                  onClick={() => {
                    changeColor("profile");
                    setShowPage(
                      `/tprofile/${data.current.state.email}/${true}`
                    );
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-user me-2"></span>
                  <span className="ms-1 d-none d-sm-inline fw-bold" id="profile">
                    Profile
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  onClick={() => {
                    setShowPage(`/tschedule/${data.current.state.email}`);
                    changeColor("schedule");
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-table me-2"></span>
                  <span className="ms-1 d-none d-sm-inline fw-bold" id="schedule">
                    YOUR SCHEDULE
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  onClick={() => {
                    setShowPage(
                      `/traineeslisttrainer/${data.current.state.email}`
                    );
                    changeColor("traineeslisttrainer");
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-edit me-2"></span>
                  <span
                    className="ms-1 d-none d-sm-inline fw-bold"
                    id="traineeslisttrainer"
                  >
                    LIST OF TRAINEES
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  onClick={() => {
                    setShowPage("/bmi");
                    changeColor("bmi");
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-ruler me-2"></span>
                  <span className="d-none d-sm-inline fw-bold" id="bmi">
                    BODY MASS INDEX
                  </span>
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="w-100 p-2 fw-bold text-white"
              style={{ border: "none", backgroundColor: "#f36100" }}
              onClick={handleLogOut}
            >
              Sign Out
            </button>
          </div>
        </div>
        <iframe src={showPage} frameborder="0" className="col-md-10 py-3">
          Content area...
        </iframe>
      </div>
    </section>
  );
}
export default TrainerProfile;
