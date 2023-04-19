import "../ClassesScreen/Classes_style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TSchedule() {
  const { email } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7105/api/Account/" + email)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((err) => alert(err.message));
  }, []);
  //this function returns the expression that has the startTime and the endTime
  const filterForSE = (day, startTime, isAfter8 = false) => {
    const d = data.filter((cl) => {
      if (isAfter8)
        return (
          cl.day === day &&
          (cl.startTime === startTime || cl.startTime > startTime)
        );
      else {
        return cl.day === day && cl.startTime === startTime;
      }
    });
    //the there is a data
    if (d[0]) {
      return d[0]["startTime"] + " - " + d[0]["endTime"];
    } else return "";
  };
  //this function returns the expression that has the class type
  const filterForClass = (day, startTime, isAfter8 = false) => {
    const d = data.filter((cl) => {
      if (isAfter8)
        return (
          cl.day === day &&
          (cl.startTime === startTime || cl.startTime > startTime)
        );
      else {
        return cl.day === day && cl.startTime === startTime;
      }
    });
    //if there is a data
    if (d[0]) return d[0]["name"];
    else return "";
  };
  return (
    <section className="classtime-section class-time-table spad overflow-hidden vh-100">
      <div>
        <div className="container my-5">
          <div className="row my-auto">
            <div className="classtime-table overflow-auto">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="workout-time">10:00</td>
                    <td
                      id="m-1"
                      className={
                        "ts-item" +
                        (filterForSE("Monday", "10:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Monday", "10:00")}</span>
                      <h6>{filterForClass("Monday", "10:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "10:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Tuesday", "10:00")}</span>
                      <h6>{filterForClass("Tuesday", "10:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "10:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "10:00")}</span>
                      <h6>{filterForClass("Wednesday", "10:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "10:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "10:00")}</span>
                      <h6>{filterForClass("Thursday", "10:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "10:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Friday", "10:00")}</span>
                      <h6>{filterForClass("Friday", "10:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "10:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "10:00")}</span>
                      <h6>{filterForClass("Saturday", "10:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "10:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "10:00")}</span>
                      <h6>{filterForClass("Sunday", "10:00")}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="workout-time">14:00</td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Monday", "14:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Monday", "14:00")}</span>
                      <h6>{filterForClass("Monday", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "14:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Tuesday", "14:00")}</span>
                      <h6>{filterForClass("Tuesday", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "14:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "14:00")}</span>
                      <h6>{filterForClass("Wednesday", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "14:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "14:00")}</span>
                      <h6>{filterForClass("Thursday", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "14:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Friday", "14:00")}</span>
                      <h6>{filterForClass("Friday", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "14:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "14:00")}</span>
                      <h6>{filterForClass("Saturday", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "14:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "14:00")}</span>
                      <h6>{filterForClass("Sunday", "14:00")}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="workout-time">16:00</td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Monday", "16:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Monday", "16:00")}</span>
                      <h6>{filterForClass("Monday", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "16:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Tuesday", "16:00")}</span>
                      <h6>{filterForClass("Tuesday", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "16:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "16:00")}</span>
                      <h6>{filterForClass("Wednesday", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "16:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "16:00")}</span>
                      <h6>{filterForClass("Thursday", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "16:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Friday", "16:00")}</span>
                      <h6>{filterForClass("Friday", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "16:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "16:00")}</span>
                      <h6>{filterForClass("Saturday", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "16:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "16:00")}</span>
                      <h6>{filterForClass("Sunday", "16:00")}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="workout-time">18:00</td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Monday", "18:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Monday", "18:00")}</span>
                      <h6>{filterForClass("Monday", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "18:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Tuesday", "18:00")}</span>
                      <h6>{filterForClass("Tuesday", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "18:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "18:00")}</span>
                      <h6>{filterForClass("Wednesday", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "18:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "18:00")}</span>
                      <h6>{filterForClass("Thursday", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "18:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Friday", "18:00")}</span>
                      <h6>{filterForClass("Friday", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "18:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "18:00")}</span>
                      <h6>{filterForClass("Saturday", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "18:00") ? " hover-bg" : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "18:00")}</span>
                      <h6>{filterForClass("Sunday", "18:00")}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="workout-time">20:00</td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Monday", "20:00", true)
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Monday", "20:00", true)}</span>
                      <h6>{filterForClass("Monday", "20:00", true)}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "20:00", true)
                          ? " hover-bg"
                          : "")
                      }
                      data-tsmeta="walls"
                    >
                      <span>{filterForSE("Tuesday", "20:00", true)}</span>
                      <h6>{filterForClass("Tuesday", "20:00", true)}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "20:00", true)
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "20:00", true)}</span>
                      <h6>{filterForClass("Wednesday", "20:00", true)}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "20:00", true)
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "20:00", true)}</span>
                      <h6>{filterForClass("Thursday", "20:00", true)}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "20:00", true)
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Friday", "20:00", true)}</span>
                      <h6>{filterForClass("Friday", "20:00", true)}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "20:00", true)
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "20:00", true)}</span>
                      <h6>{filterForClass("Saturday", "20:00", true)}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "20:00", true)
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "20:00", true)}</span>
                      <h6>{filterForClass("Sunday", "20:00", true)}</h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TSchedule;
