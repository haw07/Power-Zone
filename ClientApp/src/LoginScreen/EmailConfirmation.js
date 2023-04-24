import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
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
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  //   const [password, setPassword] = useState("");
  const handleClick = () => {
    fetch("https://localhost:7105/api/Account/verify" + email)
      .then((res) => {
        if (res.ok) {
          navigate("/confirmcode", {
            state: { email: email },
          });
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <section
      className="vh-100 h-100 d-flex justify-content-center align-items-center mt-lg-6 mb-lg-5 p-0 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* <Container> */}
      <Row className="row w-10">
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
          className="d-flex align-items-center justify-content-center text-center colEmail"
        >
          <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
            <p className="mb-4 textEmail">
              Please enter your registered email address. An email notification
              with a password reset code will then be sent to you.
            </p>
            <Form>
              <Form.Group id="email" className="mb-4">
                <Form.Label className="labelEmail">Your Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    autoFocus
                    required
                    type="email"
                    placeholder="example@gmail1.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};
