import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = ({ data, title = "Club Activity" }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Clubs Created",
        data: data.values,
        backgroundColor: "#38bdf8",
        borderRadius: 8,
        maxBarThickness: 32,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: title,
        font: { size: 18, weight: "bold" },
        color: "#0e7490",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748b", font: { weight: "bold" } },
      },
      y: {
        grid: { color: "#e0f2fe" },
        ticks: { color: "#64748b" },
        beginAtZero: true,
        suggestedMax: 10,
      },
    },
  };

  return (
    <div className="bg-white/80 rounded-2xl shadow-lg p-6 mb-10 max-w-xl mx-auto">
      <Bar data={chartData} options={options} height={180} />
    </div>
  );
};

export default ActivityChart;
