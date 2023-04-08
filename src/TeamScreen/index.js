import "./style.css";
import Data from "./data";
import { useState } from "react";
function Team() {
  const [data, setData] = useState(Data);
  return (
    <div className="container row m-auto">
      {data.map((trainer) => {
        return (
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="ts-item">
              <img
                src={require("../images/team/" + trainer.img)}
                alt="img"
                className="img-fluid w-100 h-100"
              />
              <div className="ts_text">
                <h4>{trainer.firstName + " " + trainer.lastName}</h4>
                <span>{trainer.role}</span>
                <span id="email">{trainer.email}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
