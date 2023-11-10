import React from "react";
import { Bar } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Cards Dashboard",
    },
  },
  scales: {
    x: { stacked: true },
    y: { beginAtZero: true },
  },
};

export const labels = [
  "Gasoline",
  "Health Care",
  "Automobile",
  "Education",
  "Entertainment",
  "Groceries",
];

export const data1 = [200, 300, 400, 250, 650, 300];
export const data2 = [300, 300, 600, 550, 700, 800];

export const data = {
  labels,
  datasets: [
    {
      label: "Credit Available",
      data: data1,
      backgroundColor: "rgba(255,205,65,0.5)",
      categoryPercentage: 0.5,
    },
    {
      label: "Total Credit",
      data: data2,
      backgroundColor: "rgba(64,60,58,1)",
    },
  ],
};

function StackedBar() {
  return (
    <div>
      <h1>Stacked Bar Graph</h1>
      <Bar options={options} data={data} />
    </div>
  );
}

export default StackedBar;
