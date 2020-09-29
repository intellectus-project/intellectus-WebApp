import React from 'react';
import Chart from 'react-apexcharts';
import { getEmotionValues } from '../../../utils/charts-helper/bar-chart-helper';

const OperatorsChart = ({ data }) => {
  const xAxis = data.map(d => d.userInfo.name);
  const {
    sadnessValues,
    happinessValues,
    fearValues,
    neutralityValues,
    angerValues
  } = getEmotionValues(data);
  const series = [
    {
      name: 'Angustia',
      data: sadnessValues
    },
    {
      name: 'Felicidad',
      data: happinessValues
    },
    {
      name: 'Miedo',
      data: fearValues
    },
    {
      name: 'Neutralidad',
      data: neutralityValues
    },
    {
      name: 'Enojo',
      data: angerValues
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%'
    },
    colors: ['#bfc119', '#307c11', '#5c0a4b', '#146494', '#ab3619'],
    xaxis: {
      categories: xAxis,
      labels: {
        rotate: -45
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'right',
      offsetX: 0,
      offsetY: 50
    }
  };

  return <Chart series={series} options={options} type="bar" height={350} />;
};

export default OperatorsChart;
