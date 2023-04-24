import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  Container,
  InputGroup,
} from "react-bootstrap";
import "./logInStyle.css";

// import { Routes } from "../../routes";

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state.email;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleClick = () => {
    if (password != confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      document.getElementById("error").className = "text-danger";
      setTimeout(() => {
        document.getElementById("error").className = "text-danger d-none";
      }, 3000);
    } else {
      fetch("https://localhost:7105/api/Account/GetUser/" + email)
        .then((resp) => resp.json())
        .then((data) => {
          if (data) {
            fetch("https://localhost:7105/api/Account/" + email, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...data, password: password }),
            })
              .then((resp) => {
                if (resp.ok) {
                  navigate("/login");
                }
              })
              .catch((err) => alert(err));
          }
        })
        .catch((err) => alert(err));
    }
  };
  return (
    <section
      className="vh-100 h-100 d-flex justify-content-center align-items-center mt-lg-6 mb-lg-5 p-0 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* <Container> */}
      <Row className="row">
        <p className="text-center">
          <Card.Link className="text-gray-700">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="me-2 fw-bold fs-5"
              style={{ color: "#f36100" }}
            />

            <Link
              to="/login"
              style={{ color: "#f36100" }}
              className="fw-bold fs-3"
            >
              Back to log in
            </Link>
          </Card.Link>
        </p>
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-center text-center"
        >
          <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
            <h3 className="mb-4">Reset password</h3>
            <Form>
              <Form.Group id="email" className="mb-4">
                <Form.Label>Your Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    autoFocus
                    required
                    type="email"
                    placeholder={email}
                    disabled
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="password" className="mb-4">
                <Form.Label>Your Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faUnlockAlt} />
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="confirmPassword" className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faUnlockAlt} />
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
              <div className="pt-1 mb-4 d-grid">
                <button
                  style={{ backgroundColor: "#f36100" }}
                  className="btn btn-block text-white"
                  type="button"
                  onClick={handleClick}
                >
                  RESET PASSWORD
                </button>
              </div>
            </Form>
            <div className="text-danger d-none" id="error">
              Confirm your password correctly
            </div>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};
