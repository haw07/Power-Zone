import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function ArrangeClass() {
  const { email } = useParams();
  const [cl, setClass] = useState({
    name: "",
    coachName: "",
    startTime: "",
    endTime: "",
    day: "",
    capacity: "",
  });
  useEffect(() => {
    fetch("https://localhost:7105/api/Account/GetUser/" + email)
      .then((resp) => resp.json())
      .then((data) => (cl.coachName = data.userName + " " + data.lastName))
      .catch((err) => alert(err));
  }, []);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setClass({ ...cl, [name]: value });
  };
  console.log(cl);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(
        cl.capacity &&
        cl.coachName &&
        cl.day &&
        cl.endTime &&
        cl.name &&
        cl.startTime
      )
    ) {
      setClass({
        name: "",
        coachName: cl.coachName,
        startTime: "",
        endTime: "",
        day: "",
        capacity: "",
      });
      document.getElementById("error2").className = "text-danger m-auto";
      setTimeout(() => {
        document.getElementById("error2").className =
          "text-danger m-auto d-none";
      }, 3000);
      return;
    }
    if (checkValidity(cl.startTime, cl.endTime)) {
      fetch("https://localhost:7105/api/GymClass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cl),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
      setClass({
        name: "",
        coachName: cl.coachName,
        startTime: "",
        endTime: "",
        day: "",
        capacity: "",
      });
    } else {
      setClass({
        name: "",
        coachName: cl.coachName,
        startTime: "",
        endTime: "",
        day: "",
        capacity: "",
      });
      document.getElementById("error").className = "text-danger m-auto";
      setTimeout(() => {
        document.getElementById("error").className =
          "text-danger m-auto d-none";
      }, 3000);
    }
  };
  const checkValidity = (startTime, endTime) => {
    if (startTime >= "10:00" && startTime <= "14:00") {
      return endTime > startTime && endTime <= "14:00";
    } else if (startTime >= "14:00" && startTime <= "16:00") {
      return endTime > startTime && endTime <= "16:00";
    } else if (startTime >= "16:00" && startTime <= "18:00") {
      return endTime > startTime && endTime <= "18:00";
    } else if (startTime >= "18:00" && startTime <= "20:00") {
      return endTime > startTime && endTime <= "20:00";
    } else if (startTime >= "20:00" && startTime <= "22:00") {
      return endTime > startTime && endTime <= "22:00";
    } else {
      return false;
    }
  };
  return (
    <section className="bg-dark">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card
          style={{
            width: "550px",
            height: "500px",
            backgroundColor: "white",
            borderRadius: "10px",
            paddingTop: "50px",
          }}
        >
          <Card.Body>
            <h2 className="text-center mb-4 arrangeclassh2">Set Class Time</h2>
            <Form>
              <Form.Group controlId="classNameInput" className="d-flex pb-3">
                <Form.Label>Class Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={cl.name}
                  onChange={handleChange}
                  placeholder="Enter class name"
                />
              </Form.Group>
              <Form.Group controlId="classNameInput" className="d-flex pb-3">
                <Form.Label>Class Day</Form.Label>
                <Form.Control
                  type="text"
                  name="day"
                  value={cl.day}
                  onChange={handleChange}
                  placeholder="Enter class day"
                />
              </Form.Group>
              <Form.Group controlId="startTimeInput" className="d-flex pb-3">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="time"
                  name="startTime"
                  value={cl.startTime}
                  onChange={handleChange}
                  placeholder="Enter start time"
                />
              </Form.Group>
              <Form.Group controlId="finishTimeInput" className="d-flex pb-3">
                <Form.Label>Finish Time</Form.Label>
                <Form.Control
                  type="time"
                  name="endTime"
                  value={cl.endTime}
                  onChange={handleChange}
                  placeholder="Enter finish time"
                />
              </Form.Group>
              <Form.Group controlId="classNameInput" className="d-flex pb-3">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  type="text"
                  name="capacity"
                  value={cl.capacity}
                  onChange={handleChange}
                  placeholder="Enter class capacity"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                className="w-100 mt-2 mx-auto arrangeClassBtn"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
          <div className="text-danger m-auto d-none" id="error">
            Check the validity of the class's start and end times
          </div>
          <div className="text-danger m-auto d-none" id="error2">
            Make sure that you have filled all the data properly
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default ArrangeClass;