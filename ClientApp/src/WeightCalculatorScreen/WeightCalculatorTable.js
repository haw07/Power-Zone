function WeightCalculatorTable() {
  return (
    <div>
      <div className="mb-5 text-center">
        <h1 style={{ color: "#f36100" }} className="fw-bold">
          CHECK YOUR BODY
        </h1>
        <h3 className="text-white fst-italic">BMI CALCULATOR CHART</h3>
      </div>
      <table className="table table-bordered border-white text-white text-center h-25">
        <thead style={{ backgroundColor: "black" }}>
          <tr>
            <th>BMI</th>
            <th>WEIGHT STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Below 18.5</td>
            <td>Underweight</td>
          </tr>
          <tr style={{ backgroundColor: "#111118" }}>
            <td>18.5 - 24.9</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>25.0 - 29.9</td>
            <td>Overweight</td>
          </tr>
          <tr style={{ backgroundColor: "#111118" }}>
            <td>30.5 - and Above</td>
            <td>Obese</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WeightCalculatorTable;
