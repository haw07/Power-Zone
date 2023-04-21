import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function TraineesListO() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7105/api/Account")
      .then((resp) => resp.json())
      .then((d) => setData(d))
      .catch((err) => alert(err.message));
  }, []);
  const trainees = data.filter((person) => person.role === "User");
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
              <tr>
                <td>{trainee.userName}</td>
                <td>{trainee.lastName}</td>
                <td>{trainee.email}</td>
                <td>{trainee.phoneNumber}</td>
                <td>{trainee.address}</td>
                <td>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#f36100" }}
                  >
                    <Link to={`/personalprofile/${trainee.email}`}>
                      View Profile
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#f36100" }}
                  >
                    <Link to={`/trainees/${trainee.email}`}>
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
