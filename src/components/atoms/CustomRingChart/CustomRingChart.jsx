import React from "react";
import Chart from "react-apexcharts";

const CustomRingChart = ({ id, emotionProps, percentage }) => {
  const { text, position, theme } = emotionProps;
  const { offsetY, offsetX } = position;
  const series = [percentage];
  const options = {
    chart: {
      height: 100,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetX,
        offsetY,
        hollow: {
          size: "50%",
        },
        track: {
          background: theme.track,
        },
      },
    },
    fill: {
      opacity: 1.5,
      colors: [theme.from],
      type: "gradient",
      gradient: {
        gradientToColors: [theme.to],
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 2,
        stops: [0, 50, 100],
        inverseColors: false,
      },
    },
    labels: [text],
  };
  return (
    <Chart
      id={id}
      options={options}
      series={series}
      type="radialBar"
      width="200"
    />
  );
};

export default CustomRingChart;
