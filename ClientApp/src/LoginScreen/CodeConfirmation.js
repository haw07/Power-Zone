import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const [person, setPerson] = useState({
    email: location.state.email,
    token: "",
  });
  const navigate = useNavigate();
  const handleClick = () => {
    if (isNaN(Number(person.token))) {
      document.getElementById("error1").className = "text-danger";
      setTimeout(() => {
        document.getElementById("error1").className = "text-danger d-none";
      }, 3000);
    } else {
      fetch("https://localhost:7105/api/Account/checkPin", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: Object.keys(person)
          .map(
            (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(person[key])
          )
          .join("&"),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            navigate("/resetpassword", {
              state: { email: person.email },
            });
          } else {
            document.getElementById("error").className = "text-danger";
            setTimeout(() => {
              document.getElementById("error").className = "text-danger d-none";
            }, 3000);
          }
        });
    }
  };
  return (
    <section
      className="vh-100 h-100 d-flex justify-content-center align-items-center mt-lg-6 mb-lg-5 p-0 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* <Container> */}
      <Row className="row rowCode">
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
          className="d-flex align-items-center justify-content-center text-center colCode"
        >
          <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
            <p className="mb-4 textCode">
              You have requested a password reset. To get a new password, please
              check your inbox for an email from Power Zone and enter the
              Password reset code we have sent to you.
            </p>
            <Form>
              <Form.Group id="code" className="mb-4">
                <Form.Label className="labelCode">
                  Password reset code
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    autoFocus
                    required
                    type="code"
                    placeholder="000 - 000"
                    name="token"
                    value={person.token}
                    onChange={(e) =>
                      setPerson({ ...person, token: e.target.value })
                    }
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
                  CONFIRM
                </button>
              </div>
            </Form>
            <div className="text-danger d-none" id="error">
              You have entered an incorrect code
            </div>
            <div className="text-danger d-none" id="error1">
              Make sure that the code entered is a number
            </div>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};
