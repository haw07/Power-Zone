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
    const ids = [
      "ownerprofile",
      "addtrainer",
      "addclass",
      "removeclass",
      "traineeslistowner",
      "trainerslist",
    ];
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
  const handleLogOut = () => {
    navigate("/logout", {
      state: { email: info.current.state.email },
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
                    changeColor("ownerprofile");
                    setShowPage(`/oprofile/${info.current.state.email}`);
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-user me-2"></span>
                  <span
                    className="ms-1 d-none d-sm-inline fw-bold"
                    id="ownerprofile"
                  >
                    Profile
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  onClick={() => {
                    setShowPage("/addtrainer");
                    changeColor("addtrainer");
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-user-plus me-2"></span>
                  <span
                    className="ms-1 d-none d-sm-inline fw-bold"
                    id="addtrainer"
                  >
                    Add Trainer
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  onClick={() => {
                    setShowPage("/arrangeclass");
                    changeColor("addclass");
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-plus me-2"></span>
                  <span
                    className="ms-1 d-none d-sm-inline fw-bold"
                    id="addclass"
                  >
                    Arrange Class
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  onClick={() => {
                    setShowPage("/removeclass");
                    changeColor("removeclass");
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-minus me-2"></span>
                  <span
                    className="ms-1 d-none d-sm-inline fw-bold"
                    id="removeclass"
                  >
                    Remove Class
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  onClick={() => {
                    setShowPage("/traineeslistowner");
                    changeColor("traineeslistowner");
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-edit me-2"></span>
                  <span
                    className="ms-1 d-none d-sm-inline fw-bold"
                    id="traineeslistowner"
                  >
                    List Of Trainees
                  </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  onClick={() => {
                    setShowPage("/trainerslist");
                    changeColor("trainerslist");
                  }}
                  className="nav-link align-middle px-0"
                >
                  <span className="fas fa-dumbbell me-2"></span>
                  <span
                    className="d-none d-sm-inline fw-bold"
                    id="trainerslist"
                  >
                    List Of Trainers
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
export default OwnerProfile;
