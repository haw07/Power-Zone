import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LogInForm() {
  const navigate = useNavigate();
  const [person, setPerson] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleClick = (e) => {
    if (!(person.email && person.password)) {
      document.getElementById("error").className = "text-danger";
      setTimeout(() => {
        document.getElementById("error").className = "text-danger d-none";
      }, 3000);
    } else {
      navigate("/profile", {
        state: { email: person.email, password: person.password },
      });
    }
  };
  return (
    <div className="col-xl-5 d-flex align-items-center text-center">
      <div className="card-body p-4 p-lg-5 text-black">
        <form>
          <div className="d-flex align-items-center mb-3 pb-1">
            <i
              className="fas fa-cubes fa-2x d-block m-auto"
              style={{ color: "#ff6219" }}
            >
              <img
                width={"125rem"}
                src={require("../images/logo-removebg-preview.png")}
              />
            </i>
          </div>

          <h2
            className="mb-3 pb-3 fw-bold"
            style={{ letterSpacing: "1px", color: "black" }}
          >
            Welcome to Power Zone{" "}
          </h2>

          <div className="form-floating mb-4">
            <input
              type="email"
              id="form2Example17"
              className="form-control form-control"
              placeholder="Email address"
              name="email"
              onChange={handleChange}
            />
            <label
              className="form-label"
              htmlFor="form2Example17"
              style={{ color: "black" }}
              name="email"
              value={person.email}
            >
              Email address
            </label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              id="form2Example27"
              className="form-control form-control"
              placeholder="Password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
            <label
              className="form-label"
              htmlFor="form2Example27"
              style={{ color: "black" }}
            >
              Password
            </label>
          </div>
          <div className="danger d-none" id="error">
            Make sure that you have entered the data properly
          </div>
          <div className="pt-1 mb-4 d-grid">
            <button
              style={{ backgroundColor: "#f36100" }}
              className="btn btn-block text-white"
              type="button"
              onClick={handleClick}
            >
              Login
            </button>
          </div>

          <Link
            className="small"
            to="/resetpassword"
            style={{ color: "#f36100" }}
          >
            Forgot password?
          </Link>
          <p style={{ color: "black" }} className="mb-5 pb-lg-2">
            Don't have an account?
            <Link to="/signup" style={{ color: "#f36100" }} className="ms-1">
              Register here
            </Link>
          </p>
          <a href="#!" className="small" style={{ color: "black" }}>
            Terms of use.
          </a>
          <a href="#!" className="ms-1 small" style={{ color: "black" }}>
            Privacy policy
          </a>
        </form>
      </div>
    </div>
  );
}
export default LogInForm;
