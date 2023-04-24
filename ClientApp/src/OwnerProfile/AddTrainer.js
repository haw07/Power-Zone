import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
function AddTrainer() {
  const [user, setUser] = useState({
    userName: "",
    lastName: "",
    email: "",
    role: "Coach",
    password: "",
    phoneNumber: "",
    address: "",
    gender: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const reset = () => {
    setUser({
      userName: "",
      lastName: "",
      email: "",
      password: "",
      role: "Coach",
      phoneNumber: "",
      address: "",
      gender: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.userName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.role &&
      user.address &&
      user.phoneNumber &&
      user.gender
    ) {
      fetch("https://localhost:7105/api/Account/AddCoach", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => {
          if (!res.ok) {
            document.getElementById("error").className = "text-danger m-auto";
            setTimeout(() => {
              document.getElementById("error").className =
                "text-danger m-auto d-none";
            }, 3000);
          } else {
            document.getElementById("success").className =
              "text-success m-auto";
            setTimeout(() => {
              document.getElementById("success").className =
                "text-success m-auto d-none";
            }, 3000);
          }
        })
        .catch((err) => alert(err.message));
      reset();
    } else {
      reset();
      document.getElementById("error2").className = "text-danger m-auto";
      setTimeout(() => {
        document.getElementById("error2").className =
          "text-danger m-auto d-none";
      }, 3000);
    }
  };
  return (
    <section className="bg-dark">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card
          style={{
            width: "550px",
            height: "550px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <h3 className="text-center addtrainerh2">Add a trainer</h3>
            <Form>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  value={user.userName}
                  onChange={handleChange}
                  placeholder="Enter Trainer First Name"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  placeholder="Enter Trainer Last Name"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter Trainer Email"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter Trainer Password"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  placeholder="Enter Trainer Address"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Trainer Phone Number"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </Form.Select>
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                className="w-100 mx-auto"
                onClick={handleSubmit}
                style={{ backgroundColor: "#f36100" }}
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
          <div className="text-success m-auto d-none" id="success">
            The Trainer was added successfully
          </div>
          <div className="text-danger m-auto d-none" id="error">
            The email already exists
          </div>
          <div className="text-danger m-auto d-none" id="error2">
            Make sure that you have filled all the data properly
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default AddTrainer;
