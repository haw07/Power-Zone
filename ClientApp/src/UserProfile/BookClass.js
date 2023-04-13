import Data from "./classesData";
import { useState } from "react";
function BookClass() {
  const [data, setDate] = useState(Data);
  return (
    <section style={{ backgroundColor: "#111111" }} className="bg-dark h-100">
      <table className="table table-bordered border-white text-white text-center h-25">
        <thead style={{ backgroundColor: "black" }}>
          <tr>
            <th>Class Name</th>
            <th>Coach Name</th>
            <th>Day</th>
            <th>Starts At</th>
            <th>Ends At</th>
            <th>Register</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cl) => {
            return (
              <tr>
                <td>{cl.name}</td>
                <td>{cl.CoachName}</td>
                <td>{cl.day}</td>
                <td>{cl.StartTime}</td>
                <td>{cl.EndTime}</td>
                <td>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#f36100" }}
                  >
                    Register
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default BookClass;
