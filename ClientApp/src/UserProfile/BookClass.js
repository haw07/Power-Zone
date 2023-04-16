import { useState, useEffect } from "react";
function BookClass() {
  const [data, setDate] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7105/api/GymClass")
      .then((response) => response.json())
      .then((data) => setDate(data))
      .catch((error) => alert(error.message));
  }, []);
  const register = () => {};
  return (
    <section style={{ backgroundColor: "#111111" }}>
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
                <td>{cl.coachName}</td>
                <td>{cl.day}</td>
                <td>{cl.startTime}</td>
                <td>{cl.endTime}</td>
                <td>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#f36100" }}
                    onClick={register}
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
