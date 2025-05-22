// src/ChartExample.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // ✅ 추가
import { Line } from 'react-chartjs-2';

// Chart.js 모듈 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels // ✅ 플러그인 등록
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '레벨 변화 추이',
    },
    datalabels: {
      color: '#000',
      anchor: 'end',
      align: 'top',
      font: {
        weight: 'bold',
        size: 12,
      },
      formatter: (value) => value, // ✅ 점 위에 값 표시
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: '날짜',
      },
    },
    y: {
      display: false, // Y축 숨김
    },
  },
};

const labels = ['23/9/4', '23/11/6', '24/2/10', '24/4/26', '24/7/14', '24/11/17'];

const data = {
  labels,
  datasets: [
    {
      label: '레벨',
      data: [280, 281, 282, 283, 284, 285],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.3)',
      tension: 0.3,
    },
  ],
};

function ChartExample() {
  return <Line options={options} data={data} />;
}

export default ChartExample;
