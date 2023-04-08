function LogInForm() {
  return (
    <div className="col-md-6 col-lg-5 d-flex align-items-center text-center">
      <div className="card-body p-4 p-lg-5 text-black">
        <form>
          <div className="d-flex align-items-center mb-3 pb-1">
            <i
              className="fas fa-cubes fa-2x d-block m-auto"
              style={{ color: "#ff6219" }}
            >
              <img width={"125rem"} src={require("../images/logo-removebg-preview.png")} />
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
              className="form-control form-control-lg"
              placeholder="Email address"
            />
            <label
              className="form-label"
              for="form2Example17"
              style={{ color: "black" }}
            >
              Email address
            </label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
              placeholder="Password"
            />
            <label
              className="form-label"
              for="form2Example27"
              style={{ color: "black" }}
            >
              Password
            </label>
          </div>

          <div className="pt-1 mb-4 d-grid">
            <button
              style={{ backgroundColor: "#f36100" }}
              className="btn btn-block text-white"
              type="button"
            >
              Login
            </button>
          </div>

          <a className="small" href="#!" style={{ color: "#f36100" }}>
            Forgot password?
          </a>
          <p style={{ color: "black" }} className="mb-5 pb-lg-2">
            Don't have an account?
            <a href="#!" style={{ color: "#f36100" }} className="ms-1">
              Register here
            </a>
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
