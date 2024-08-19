import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function EnneagramChart({ answers }) {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
      {
        label: '类型得分',
        data: answers,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 20
      }
    }
  };

  return <Radar data={data} options={options} />;
}

export default EnneagramChart;
