import React from "react";
import Chart from "react-apexcharts";
import "./_style.scss";

const CustomRingChart = ({ text, theme, percentage }) => {
  const series = [percentage];
  const options = {
    chart: {
      height: 100,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        fill: "#1cbd00",
        hollow: {
          size: "50%",
        },
        track: {
          background: "#ADA7A7",
        },
      },
    },
    fill: {
        opacity: 1.5,
        colors: ['#ff9966'],
        type: 'gradient',
        gradient: {
            gradientToColors: ['#ff5e62'],
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 2,
            stops: [0, 50, 100],
            inverseColors: false
        },
    },
    labels: [text],
  };
  return (
    <div >
      <Chart options={options} series={series} type="radialBar" width="500" />
    </div>
  );
};

export default CustomRingChart;
