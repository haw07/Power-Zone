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
import "../LoginScreen/logInStyle.css";

// import { Routes } from "../../routes";

export default () => {
  return (
    <section
      className="vh-100 h-100 d-flex justify-content-center align-items-center mt-lg-6 mb-lg-5 p-0 overflow-hidden"
      style={{ backgroundColor: "#111111", height: "100px !important"}}
    >
      {/* <Container> */}
      <Row className="row rowCode">
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-center text-center colCode"
          style={{ height: "100px"}}
        >
          <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img 
                    height="30px"
                    width="30px"
                    src="/check-circle.png"
                    alt="check"
                />
                <h6 className="fw-bold pb-2 w-100 reset">Password reset successfully</h6>
            </div>
            <p className="mb-4 textCode text-center">
                <br/>
                Awesome. you've successfully updated your password.
            </p>
            <div className="pt-1 mb-4 d-grid">
                <button
                  style={{ backgroundColor: "#f36100" }}
                  className="btn btn-block text-white"
                  type="button"
                //   onClick={handleClick}
                >
                    <Link to="/">Back to Main Page</Link>
                </button>
              </div>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};