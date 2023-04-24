import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    userName: "",
    lastName: "",
    role: "User",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    gender: "",
  });
  const reset = () => {
    setPerson({
      userName: "",
      lastName: "",
      role: "User",
      email: "",
      phoneNumber: "",
      password: "",
      address: "",
      gender: "",
    });
  };
  const display = (id) => {
    document.getElementById(id).className = "text-danger";
    setTimeout(() => {
      document.getElementById(id).className = "text-danger d-none";
    }, 3000);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      person.userName &&
      person.lastName &&
      person.email &&
      person.password &&
      person.address &&
      person.phoneNumber &&
      person.gender
    ) {
      fetch("https://localhost:7105/api/Account/UserExists/" + person.email)
        .then((resp) => resp.json())
        .then((data) => {
          if (data) {
            display("error1");
          } else {
            fetch("https://localhost:7105/api/Account", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(person),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                  navigate("/profile", {
                    state: { ...person },
                  });
                }
              })
              .catch((error) => alert(error));
          }
        })
        .catch((err) => alert(err.message));
    } else {
      display("error");
    }
    reset();
  };
  const hover = (state) => {
    if (state === "enter") {
      document.getElementById("btn").style.backgroundColor = "#f36100";
      document.getElementById("btn").style.color = "white";
    } else {
      document.getElementById("btn").style.backgroundColor = "white";
      document.getElementById("btn").style.color = "black";
    }
  };
  return (
    <div className="col-xl-5">
      <div className="card-body text-black">
        <h2 className="mb-2 text-uppercase fw-bold">User registration form</h2>

        <div className="row">
          <div className="form-outline form-floating col-12">
            <input
              type="text"
              id="form3Example1m"
              className="form-control form-control"
              placeholder="First Name"
              value={person.userName}
              name="userName"
              onChange={handleChange}
            />
            <label className="form-label ms-3" htmlFor="form3Example1m">
              First name
            </label>
          </div>
        </div>
        <div className="form-outline mt-3 form-floating col-12 bg-muted">
          <input
            type="text"
            id="form3Example1n"
            className="form-control form-control"
            placeholder="Last Name"
            value={person.lastName}
            name="lastName"
            onChange={handleChange}
          />
          <label className="form-label ms-1" htmlFor="form3Example1n">
            Last name
          </label>
        </div>
        <div className="row">
          <div className="form-outline form-floating mt-3 col-12">
            <input
              type="email"
              id="form3Example1m1"
              className="form-control form-control"
              placeholder="Email address"
              value={person.email}
              onChange={handleChange}
              name="email"
            />
            <label className="form-label ms-3" htmlFor="form3Example1m1">
              Email Address
            </label>
          </div>
          <div className="form-outline form-floating mt-3 col-12">
            <input
              type="password"
              id="form3Example1n1"
              className="form-control form-control"
              placeholder="Password"
              value={person.password}
              name="password"
              onChange={handleChange}
            />
            <label className="form-label ms-3" htmlFor="form3Example1n1">
              Password
            </label>
          </div>
        </div>
        <div className="row">
          <div className="form-outline form-floating col-12 mt-3">
            <input
              type="text"
              id="form3Example1m"
              className="form-control form-control"
              placeholder="Address"
              value={person.address}
              name="address"
              onChange={handleChange}
            />
            <label className="form-label ms-3" htmlFor="form3Example1m">
              Address
            </label>
          </div>
          <div className="form-outline form-floating col-12 mt-3">
            <input
              type="tel"
              id="form3Example1n"
              className="form-control form-control"
              placeholder="Phone Number"
              value={person.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
            />
            <label className="form-label ms-3" htmlFor="form3Example1n">
              Phone Number
            </label>
          </div>
          <div className="form-outline form-floating mt-3 col-12">
            <select
              className="form-select"
              onChange={handleChange}
              name="gender"
              id="gender"
              value={person.gender}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <label className="form-label ms-3" htmlFor="gender">
              Gender
            </label>
          </div>
        </div>
        <div id="error" className="text-danger d-none">
          Make sure that you have filled the data properly
        </div>
        <div id="error1" className="text-danger d-none">
          You already have an account! try to login
        </div>
        <div className="signuptext">
          <p>
            Already a member?{" "}
            <span>
              <Link to="/login" style={{ color: "#f36100" }}>
                Log In
              </Link>
            </span>
          </p>
        </div>
        <div className="d-flex justify-content-center pt-3 ">
          <button
            type="button"
            className="btn btn-lg"
            onMouseOver={() => hover("enter")}
            onMouseOut={() => hover("leave")}
            id="btn"
            style={{ color: "black" }}
            onClick={() => reset()}
          >
            Reset all
          </button>
          <button
            type="button"
            className="btn btn-lg ms-2 text-white"
            style={{ backgroundColor: "#f36100" }}
            onClick={handleSubmit}
            id="submit"
          >
            <Link to="/emailverification">Submit form</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignUpForm;
