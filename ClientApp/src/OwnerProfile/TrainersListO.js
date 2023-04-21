import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function TrainersListO() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7105/api/Account")
      .then((resp) => resp.json())
      .then((d) => setData(d))
      .catch((err) => alert(err.message));
  }, []);
  const trainers = data.filter((person) => person.role === "Coach");
  console.log(trainers);
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
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => {
            return (
              <tr>
                <td>{trainer.userName}</td>
                <td>{trainer.lastName}</td>
                <td>{trainer.email}</td>
                <td>{trainer.phoneNumber}</td>
                <td>{trainer.address}</td>
                <td>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#f36100" }}
                  >
                    <Link to={`/tprofile/${trainer.email}`}>View Profile</Link>
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

export default TrainersListO;
