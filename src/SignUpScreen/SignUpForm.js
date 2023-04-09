import { useState } from "react";
function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setSex("");
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
      <div className="card-body p-md-5 text-black">
        <h2 className="mb-5 text-uppercase fw-bold">User registration form</h2>

        <div className="row">
          <div className="form-outline form-floating">
            <input
              type="text"
              id="form3Example1m"
              className="form-control form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="form-label ms-3" for="form3Example1m">
              First name
            </label>
          </div>
        </div>
        <div className="form-outline form-floating mt-3">
          <input
            type="text"
            id="form3Example1n"
            className="form-control form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="form-label ms-1" for="form3Example1n">
            Last name
          </label>
        </div>

        <div className="row">
          <div className="form-outline form-floating mt-3">
            <input
              type="email"
              id="form3Example1m1"
              className="form-control form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label ms-3" for="form3Example1m1">
              Email address
            </label>
          </div>
          <div className="form-outline form-floating mt-3">
            <input
              type="password"
              id="form3Example1n1"
              className="form-control form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form-label ms-3" for="form3Example1n1">
              Password
            </label>
          </div>
        </div>

        <div className="text-start mb-4 py-2 mt-2">
          <h3 className="mb-3 me-4">Gender: </h3>

          <div className="form-check form-check-inline mb-0 me-4">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="femaleGender"
              value={sex}
              onChange={() => setSex("Female")}
            />
            <label className="form-check-label" for="femaleGender">
              Female
            </label>
          </div>

          <div className="form-check form-check-inline mb-0 me-4">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="maleGender"
              value={sex}
              onChange={() => setSex("Male")}
            />
            <label className="form-check-label" for="maleGender">
              Male
            </label>
          </div>
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
          >
            Submit form
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignUpForm;
