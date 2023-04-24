import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
function LogOut() {
  const navigate = useNavigate();
  const location = useLocation();
  const loc = useRef(location);
  const handleUndo = () => {
    fetch("https://localhost:7105/api/Account/role/" + loc.current.state.email)
      .then((resp) => resp.text())
      .then((data) => {
        if (data === "Owner") {
          navigate("/ownerprofile", {
            state: { email: loc.current.state.email },
          });
        } else if (data === "Coach") {
          navigate("/trainerprofile", {
            state: { email: loc.current.state.email },
          });
        } else {
          navigate("/profile", {
            state: { email: loc.current.state.email },
          });
        }
      })
      .catch((err) => alert(err.message));
  };
  const handleLogOut = () => {
    fetch("https://localhost:7105/api/Account/signout", {
      method: "POST",
    })
      .then((resposne) => {
        if (resposne.ok) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <section className="logout_section">
      <Card className="logout_card">
        <Card.Body className="card-body-logout">
          <Card.Title>
            <div className="Logoutimage_container">
              <div className="imageLogout"></div>
            </div>
          </Card.Title>
          <Card.Text className="logoutText">Oh no! You're leaving...</Card.Text>
          <Card.Text className="logoutText">Are you Sure?</Card.Text>
          <Button className="kiddingButton" onClick={handleUndo}>
            Naah, Just Kidding
          </Button>{" "}
          <Button
            className="logoutbutton"
            style={{ backgroundColor: "#f36100", color: "white" }}
            onClick={handleLogOut}
          >
            Yes, Log Me Out
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default LogOut;
