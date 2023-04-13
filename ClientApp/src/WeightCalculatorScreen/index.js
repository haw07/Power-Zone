import TrueWeightCalculator from "./TrueWeightCalculator";
import WeightCalculatorTable from "./WeightCalculatorTable";
import { useState } from "react";
function WeightCalculator() {
  return (
    <section className="h-100 bg-dark w-100 p-5">
      <WeightCalculatorTable />
      <TrueWeightCalculator />
    </section>
  );
}
export default WeightCalculator;
