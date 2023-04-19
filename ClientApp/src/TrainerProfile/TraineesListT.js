import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dropdown, Table } from "react-bootstrap";

function TraineesListT() {
  const [data, setDate] = useState([]);
  const { email } = useParams();
  useEffect(() => {
    fetch("https://localhost:7105/api/Account/Coach/" + email)
      .then((resp) => resp.json())
      .then((data) => setDate(data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="text-center bg-dark h-100 vh-100">
      <Table className="table table-bordered border-white text-white text-center w-100 ">
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
          {data.map((trainee) => {
            return (
              <tr>
                <td>{trainee.userName ? trainee.userName : "Not Provided"}</td>
                <td>{trainee.lastName ? trainee.lastName : " Not Provided"}</td>
                <td>{trainee.email ? trainee.email : "Not Provided"}</td>
                <td>
                  {trainee.phoneNumber ? trainee.phoneNumber : "Not Provided"}
                </td>
                <td>{trainee.address ? trainee.address : "Not Provided"}</td>
                <td>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#f36100" }}
                  >
                    <Link to={`/editprofilet/${trainee.email}`}>
                      View Profile
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

export default TraineesListT;
