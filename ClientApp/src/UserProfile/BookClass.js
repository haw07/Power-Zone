import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
function BookClass() {
  const navigate = useNavigate();
  const { email } = useParams();
  const [data, setDate] = useState([]);
  const [checkClassFull, setCheckClassFull] = useState(false);
  const [registeredClasses, setRegisteredClasses] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7105/api/GymClass")
      .then((response) => response.json())
      .then((data) => setDate(data))
      .catch((error) => alert(error.message));
    fetch("https://localhost:7105/api/Account/" + email)
      .then((response) => response.json())
      .then((data) => setRegisteredClasses(data))
      .catch((error) => alert(error.message));
  }, []);
  const isRegistered = (id, name) => {
    for (const cl of registeredClasses) {
      if (parseInt(cl.id) == id || cl.name === name) return true;
    }
    return false;
  };
  const register = (cl) => {
    const data = {
      email: email,
      coachName: cl.coachName,
      className: cl.name,
      startTime: cl.startTime,
    };
    console.log(data);
    const d = Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
    fetch("https://localhost:7105/api/Account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: d,
    })
      .then((response) => {
        console.log(response.status);
        response.json();
      })
      .then((data) => navigate(0))
      .catch((err) => alert(err.message));
  };
  const isClassFull = async (className, coachName, startTime) => {
    try {
      let result;
      const url =
        "https://localhost:7105/api/Account/" +
        className.split(" ").join("") +
        "/" +
        coachName.split(" ").join("") +
        "/" +
        startTime;
      const response = await fetch(url);
      result = await response.json();
      return result;
    } catch (err) {
      alert(err.message);
    }
  };
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
                    onClick={() => register(cl)}
                    disabled={
                      (isRegistered(cl.id, cl.name) ||
                        isClassFull(cl.name, cl.coachName, cl.startTime)) ==
                      true
                        ? true
                        : false
                    }
                  >
                    {console.log(
                      isRegistered(cl.id, cl.name) ||
                        isClassFull(cl.name, cl.coachName, cl.startTime)
                    )}
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
