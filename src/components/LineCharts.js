import React from "react";
import { Line } from "react-chartjs-2";

function LineCharts() {
  const data = {
    labels: [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
      "Eighth",
      "Ninth",
    ],
    datasets: [
      {
        label: "SGPA of a Semester (4.00)",
        data: [2.88, 2.98, 3.02, 3.4, 3.23, 3.75, 3.69, 4.0, 3.86],
        borderColor: ["rgba(238, 86, 59, 0.774)"],
        backgroundColor: ["rgba(238, 86, 59, 0.774)"],
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default LineCharts;
