import React from "react";
import { TRANSACTIONS } from "../data/transactions";
import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Number of Transactions",
    },
  },
};

function AreaChartTwo() {
  let filteredData = {};

  TRANSACTIONS.forEach((transaction) => {
    let time = transaction.date.split(" ")[1];
    let hour = time.split(":")[0];

    if (filteredData.hasOwnProperty(hour)) {
      filteredData[hour] += 1;
    } else {
      filteredData[hour] = 1;
    }
  });

  const data = {
    labels: Object.keys(filteredData).sort(),
    datasets: [
      {
        fill: true,
        label: "Number of Transactions",
        data: Object.keys(filteredData)
          .sort()
          .map((val) => filteredData[val]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <h1>Number of Transactions / Time of the day - Last 7 days</h1>
      <Line options={options} data={data} />
    </div>
  );
}

export default AreaChartTwo;
