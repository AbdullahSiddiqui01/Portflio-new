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
    labels: [
      'React', 'Node.js', 'Python', 'Machine Learning', 'MongoDB', 
      'Microsoft Excel', 'Adobe Photoshop', 'JavaScript', 'MySQL', 
      'Cybersecurity', 'AWS'
    ],
    datasets: [
      {
        label: 'Skills Distribution',
        data: [20, 15, 20, 10, 5, 10, 5, 15, 10, 7, 8], // Expanded data for a full skill breakdown
        backgroundColor: [
          '#4B77BE', '#36A2EB', '#FFCE56', '#4BC0C0', '#B77BEB',
          '#FF6384', '#FF9F40', '#77DD77', '#9A7D0A', '#8B0000', '#7FFFD4'
        ],
        hoverBackgroundColor: [
          '#4B77BE', '#36A2EB', '#FFCE56', '#4BC0C0', '#B77BEB',
          '#FF6384', '#FF9F40', '#77DD77', '#9A7D0A', '#8B0000', '#7FFFD4'
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#333', 
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += `: ${context.raw}%`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <h2>Skills Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
