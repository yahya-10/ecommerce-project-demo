import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Number of customers between 2020 & 2021",
      color: "white",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "2020",
      data: labels.map(() => faker.datatype.number({ min: 25, max: 70 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "2021",
      data: labels.map(() => faker.datatype.number({ min: 70, max: 100 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
// console.log(options.plugins.legend);
const LandingPageChart = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pricing Plans
          </h2>
          <p className="mt-5 text-xl text-gray-400">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
        <div className="w-full">
          <div className="mt-1 relative text-gray-50">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageChart;
