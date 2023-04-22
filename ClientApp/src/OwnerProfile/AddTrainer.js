import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function AddTrainer() {
  const [user, setUser] = useState([]);
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
//   console.log(cl);
  const handleSubmit = (e) => { };
//     e.preventDefault();
//     if (
//       !(
//         cl.capacity &&
//         cl.coachName &&
//         cl.day &&
//         cl.endTime &&
//         cl.name &&
//         cl.startTime
//       )
//     ) {
//       setClass({
//         name: "",
//         coachName: cl.coachName,
//         startTime: "",
//         endTime: "",
//         day: "",
//         capacity: "",
//       });
//       document.getElementById("error2").className = "text-danger m-auto";
//       setTimeout(() => {
//         document.getElementById("error2").className =
//           "text-danger m-auto d-none";
//       }, 3000);
//       return;
//     }
//     if (checkValidity(cl.startTime, cl.endTime)) {
//       fetch("https://localhost:7105/api/GymClass", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(cl),
//       })
//         .then((resp) => resp.json())
//         .then((data) => console.log(data))
//         .catch((err) => alert(err.message));
//       setClass({
//         name: "",
//         coachName: cl.coachName,
//         startTime: "",
//         endTime: "",
//         day: "",
//         capacity: "",
//       });
//     } else {
//       setClass({
//         name: "",
//         coachName: cl.coachName,
//         startTime: "",
//         endTime: "",
//         day: "",
//         capacity: "",
//       });
//       document.getElementById("error").className = "text-danger m-auto";
//       setTimeout(() => {
//         document.getElementById("error").className =
//           "text-danger m-auto d-none";
//       }, 3000);
//     }
//   };
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
            <h3 className="text-center mb-4 addtrainerh2">Add a trainer</h3>
            <Form>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={cl.firstName}
                  onChange={handleChange}
                  placeholder="Enter Trainer First Name"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={cl.lastName}
                  onChange={handleChange}
                  placeholder="Enter Trainer Last Name"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={cl.email}
                  onChange={handleChange}
                  placeholder="Enter Trainer Email"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={cl.address}
                  onChange={handleChange}
                  placeholder="Enter Trainer Address"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={cl.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Trainer Phone Number"
                />
              </Form.Group>
              <Form.Group controlId="" className="d-flex pb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select>
                    <option disabled>Select Gender</option>
                    <option value={cl.gender}>Male</option>
                    <option value={cl.gender}>Female</option>
                </Form.Select>
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
            The Trainer already exists
          </div>
          <div className="text-danger m-auto d-none" id="error2">
            Make sure that you have filled all the data properly
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default AddTrainer;
