import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['React', 'Node.js', 'Python', 'Machine Learning','Mongo Db','Microsoft Excel','Adobe PhotoShop','JavaScript','Mysql','CyberSecurity','Aws'],
    datasets: [
      {
        label: 'Skills Distribution',
        data: [25, 25, 30, 20], // Example data representing the skills distribution
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
  };

  return (
    <div className="pie-chart-container">
      <h2>My Skills Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
