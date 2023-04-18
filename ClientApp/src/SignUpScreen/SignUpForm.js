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
    imgURL: "",
    height: "",
    weight: "",
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
      imgURL: "",
      height: "",
      weight: "",
    });
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
      person.imgURL &&
      person.height &&
      person.weight
    ) {
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
    } else {
      document.getElementById("error").className = "text-danger";
      setTimeout(() => {
        document.getElementById("error").className = "text-danger d-none";
      }, 3000);
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
        </div>

        <div className="row">
          <div className="form-outline form-floating col-12 mt-3">
            <input
              type="url"
              id="form3Example1m"
              className="form-control form-control"
              placeholder="Image URL"
              value={person.imgURL}
              name="imgURL"
              onChange={handleChange}
            />
            <label className="form-label ms-3" htmlFor="form3Example1m">
              Image URL
            </label>
          </div>
        </div>
        <div className="row">
          <div className="form-outline form-floating col-12 mt-3">
            <input
              type="text"
              id="form3Example1m"
              className="form-control form-control"
              placeholder="height"
              value={person.height}
              name="height"
              onChange={handleChange}
            />
            <label className="form-label ms-3" htmlFor="form3Example1m">
              Height
            </label>
          </div>
          <div className="form-outline form-floating col-12 mt-3">
            <input
              type="tel"
              id="form3Example1n"
              className="form-control form-control"
              placeholder="weight"
              value={person.weight}
              name="weight"
              onChange={handleChange}
            />
            <label className="form-label ms-3" htmlFor="form3Example1n">
              Weight
            </label>
          </div>
        </div>
        <div id="error" className="text-danger d-none">
          Make sure that you have filled the data properly
        </div>
        <div id="error" className="text-danger d-none">
          You already have an account! login instead
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
            Submit form
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignUpForm;
