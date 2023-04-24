import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function RemoveClass() {
  const { email } = useParams();
  const [coaches, setCoaches] = useState([]);
  const [info, setInfo] = useState({
    coachName: "",
    className: "",
    day: "",
    startTime: "",
  });
  const reset = () => {
    setInfo({
      coachName: "",
      className: "",
      day: "",
      startTime: "",
    });
  };
  const display = (id) => {
    document.getElementById(id).className = "text-danger m-auto";
    setTimeout(() => {
      document.getElementById(id).className = "text-danger m-auto d-none";
    }, 3000);
  };
  useEffect(() => {
    fetch("https://localhost:7105/api/Account")
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          const filteredCoaches = data.filter((user) => {
            return user.role === "Coach";
          });
          setCoaches(filteredCoaches);
        }
      })
      .catch((err) => alert(err));
  }, []);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://localhost:7105/api/GymClass/" +
      info.className +
      "/" +
      info.coachName +
      "/" +
      info.day +
      "/" +
      info.startTime;
    console.log(url);
    if (info.className && info.coachName && info.day && info.startTime) {
      fetch(url, {
        method: "DELETE",
      })
        .then((resp) => {
          reset();
          if (resp.ok) {
            document.getElementById("success").className =
              "text-success m-auto";
            setTimeout(() => {
              document.getElementById("success").className =
                "text-success m-auto d-none";
            }, 3000);
          } else {
            display("error2");
          }
        })
        .catch((err) => alert(err.message));
    } else {
      reset();
      display("error");
    }
  };
  return (
    <section className="bg-dark">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card
          style={{
            width: "550px",
            height: "420px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Card.Body>
            <h2 className="text-center mb-4 arrangeclassh2">Remove Class</h2>
            <Form>
              <Form.Group controlId="classNameInput" className="d-flex pb-3">
                <Form.Label>Coach Name</Form.Label>
                <Form.Select
                  name="coachName"
                  value={info.coachName}
                  onChange={handleChange}
                >
                  <option value="">Select Coach</option>
                  {coaches.map((coach) => {
                    return (
                      <option value={coach.userName + " " + coach.lastName}>
                        {coach.userName + " " + coach.lastName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="classNameInput" className="d-flex pb-3">
                <Form.Label>Class Name</Form.Label>
                <Form.Control
                  type="text"
                  name="className"
                  value={info.className}
                  onChange={handleChange}
                  placeholder="Enter class name"
                />
              </Form.Group>
              <Form.Group controlId="classNameInput" className="d-flex pb-3">
                <Form.Label>Class Day</Form.Label>
                <Form.Control
                  type="text"
                  name="day"
                  value={info.day}
                  onChange={handleChange}
                  placeholder="Enter class day"
                />
              </Form.Group>
              <Form.Group controlId="startTimeInput" className="d-flex pb-3">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="time"
                  name="startTime"
                  value={info.startTime}
                  onChange={handleChange}
                  placeholder="Enter start time"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                className="w-100 mt-0 mx-auto arrangeClassBtn"
                onClick={handleSubmit}
              >
                Remove
              </Button>
            </Form>
          </Card.Body>
          <div className="text-danger m-auto d-none" id="error">
            Make sure that you have filled all the data properly
          </div>
          <div className="text-danger m-auto d-none" id="error2">
            You are trying to remove an unexisting class
          </div>
          <div className="text-success m-auto d-none" id="success">
            The class was removed successfully
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default RemoveClass;
