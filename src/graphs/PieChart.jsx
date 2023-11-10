import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { TRANSACTIONS } from "../data/transactions";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const labelsSet = new Set();
  let filteredData = {};
  TRANSACTIONS.forEach((transaction) => {
    labelsSet.add(transaction.merchant);
    if (filteredData.hasOwnProperty(transaction.merchant)) {
      filteredData[transaction.merchant] += 1;
    } else {
      filteredData[transaction.merchant] = 1;
    }
  });

  const data = {
    labels: [...labelsSet].sort(),
    datasets: [
      {
        label: "Number of Transactions per Merchants",
        data: Object.keys(filteredData)
          .sort()
          .map((val) => filteredData[val]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Number of Transactions / Merchants</h1>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
