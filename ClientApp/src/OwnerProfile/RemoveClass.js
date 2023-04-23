import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function RemoveClass() {
  const { email } = useParams();
  const [coaches, setCoaches] = useState([]);
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
  return (
    <section className="bg-dark">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card
          style={{
            width: "550px",
            height: "450px",
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
                  // value={cl.coachName}
                  // onChange={handleChange}
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
                  name="name"
                  // value={cl.name}
                  // onChange={handleChange}
                  placeholder="Enter class name"
                />
              </Form.Group>
              <Form.Group controlId="classNameInput" className="d-flex pb-3">
                <Form.Label>Class Day</Form.Label>
                <Form.Control
                  type="text"
                  name="day"
                  // value={cl.day}
                  // onChange={handleChange}
                  placeholder="Enter class day"
                />
              </Form.Group>
              <Form.Group controlId="startTimeInput" className="d-flex pb-3">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="time"
                  name="startTime"
                  // value={cl.startTime}
                  // onChange={handleChange}
                  placeholder="Enter start time"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                className="w-100 mt-0 mx-auto arrangeClassBtn"
                // onClick={handleSubmit}
              >
                Remove
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

export default RemoveClass;
