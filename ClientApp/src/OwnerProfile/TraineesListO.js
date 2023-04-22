import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

function TraineesListO() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:7105/api/Account")
      .then((resp) => resp.json())
      .then((d) => setData(d))
      .catch((err) => alert(err.message));
  }, []);
  const trainees = data.filter((person) => person.role === "User");
  const handleClick = (email) => {
    fetch("https://localhost:7105/api/Account/GetUser/" + email)
      .then((resp) => resp.json())
      .then((d) => {
        if (d) {
          fetch("https://localhost:7105/api/Account/" + email, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: "",
          })
            .then((data) => {
              if (data) {
                navigate(0);
              }
            })
            .catch((err) => alert(err.message));
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="text-center bg-dark vh-100">
      <Table className="table table-bordered border-white text-white text-center w-100">
        <thead style={{ backgroundColor: "black" }}>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Profiles</th>
            <th>Subscription</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((trainee) => {
            return (
              <tr key={trainee.id}>
                <td>{trainee.userName}</td>
                <td>{trainee.lastName}</td>
                <td>{trainee.email}</td>
                <td>{trainee.phoneNumber}</td>
                <td>{trainee.address}</td>
                <td>
                  <button
                    className="btn text-white viewTrainer"
                    style={{ backgroundColor: "#f36100" }}
                  >
                    <Link to={`/personalprofile/${trainee.email}/${false}`}>
                      View Profile
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    className="btn text-white cancelSub"
                    style={{ backgroundColor: "#f36100" }}
                  >
                    <Link to="" onClick={() => handleClick(trainee.email)}>
                      Cancel Subscription
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TraineesListO;
