import React from 'react';
import Chart from 'react-apexcharts';

const CustomRingChart = ({ emotionProps, percentage }) => {
  const { text, position, theme, id } = emotionProps;
  const { offsetY, offsetX } = position;
  const formattedPercentage = Math.round(percentage * 100);
  const series = [formattedPercentage];
  const options = {
    chart: {
      height: 100,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        offsetX,
        offsetY,
        hollow: {
          size: '50%'
        },
        track: {
          background: theme.track
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '1em',
            fontFamily: undefined,
            fontWeight: 600,
            color: '#2d2a2a',
            offsetY: 0
          },
          value: {
            show: true,
            fontSize: '1em',
            fontFamily: undefined,
            fontWeight: 400,
            color: '#2d2a2a',
            offsetY: 5
          }
        }
      }
    },
    fill: {
      opacity: 1.5,
      colors: [theme.from],
      type: 'gradient',
      gradient: {
        gradientToColors: [theme.to],
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 2,
        stops: [0, 50, 100],
        inverseColors: false
      }
    },
    labels: [text]
  };
  return <Chart id={id} options={options} series={series} type="radialBar" width="200" />;
};

export default CustomRingChart;
