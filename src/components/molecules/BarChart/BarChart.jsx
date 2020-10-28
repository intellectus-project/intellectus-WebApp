import React from 'react';
import Chart from 'react-apexcharts';
import { Tag } from 'antd';
import { getEmotionValues } from '../../../utils/charts-helper/bar-chart-helper';
import { formatDate, isValidDate } from '../../../utils/func-helpers';

const BarChart = ({ data, setDayModalDate, showDayModal, tagDescription, tagColor }) => {
  const xAxis = data.map(d => formatDate(d.date));
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
      stackType: '100%',
      events: {
        click: event => {
          const clickedElement = document.getElementById(event.target.id);
          const date = clickedElement && clickedElement.innerHTML;
          if (isValidDate(date)) {
            setDayModalDate(date);
            showDayModal(true);
          }
        }
      }
    },
    colors: ['#bfc119', '#307c11', '#5c0a4b', '#146494', '#ab3619'],
    yaxis:{
      title: {
        text: 'Consultantes',
        style: {
            color: undefined,
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title',
        },
    }
    },
    xaxis: { 
      title: {
      text: 'Seleccione la fecha de la cual desea obtener información',
      align: 'right',
      style: {
          color: '#aaaaaa',
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 300,
          cssClass: 'apexcharts-xaxis-title',
      },
  },
      categories: xAxis,
      labels: {
        rotate: -45
      },
      axisBorder: {
        show: false
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

  return (
    <>
      {/*<Tag>{tagDescription}</Tag>*/}
      <Chart series={series} options={options} type="bar" height={350} />
    </>
  );
};

export default BarChart;
