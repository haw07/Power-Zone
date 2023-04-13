import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function LogOut() {
  return (
    <section class="logout_section">
      <Card class="logout_card">
        <Card.Body class="card-body-logout">
          <Card.Title>
            <div className="Logoutimage_container">
              <div className="imageLogout"></div>
            </div>
          </Card.Title>
          <Card.Text className="logoutText">Oh no! You're leaving...</Card.Text>
          <Card.Text className="logoutText">Are you Sure?</Card.Text>
          <Button className="kiddingButton">
            <Link to="/profile">Naah, Just Kidding</Link>
          </Button>{" "}
          <Link to="/">
            <Button
              className="logoutbutton"
              style={{ backgroundColor: "#f36100", color: "white" }}
            >
              Yes, Log Me Out
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </section>
  );
}

export default LogOut;
