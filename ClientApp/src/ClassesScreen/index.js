import ClassesTable from "./ClassesTable";
import { useState, useEffect } from "react";
function Classes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7105/api/GymClass")
      .then((response) => response.json())
      .then((d) => setData(d))
      .catch((err) => alert(err.message));
  }, []);
  return (
    <div className="bg-dark text-white overflow-hidden">
      <ClassesTable classes={data} />
    </div>
  );
}
export default Classes;
