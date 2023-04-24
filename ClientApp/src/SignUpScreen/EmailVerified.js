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
          <div className="bg-white shadow-soft border rounded border-light p-4 w-100 fmxw-500">
            <img 
                height="80px"
                weight="80px"
                src="/accept.png"
                alt="accept"
            />
            <p className="mb-4 textCode mt-4 text-center">
                <span className="fw-bold pb-2">Your email has been verified.</span>
                <br/>
                You can now sign in with your new account
            </p>
            <div className="pt-1 mb-4 d-grid">
                <button
                  style={{ backgroundColor: "#f36100" }}
                  className="btn btn-block text-white"
                  type="button"
                //   onClick={handleClick}
                >
                    <Link to="/login">Sign In</Link>
                </button>
              </div>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};