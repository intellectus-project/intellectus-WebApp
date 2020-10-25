import React from 'react';
import Chart from 'react-apexcharts';
import Emotions from '../../../utils/emotions';
import './_style.scss';

const LineChartEmotion = ({ values }) => {
  let series = [];
  let colors = [];
  const valuesArr = Object.entries(values);
  for (var [emotionName, value] of valuesArr) {
    colors.push(Emotions[emotionName].color);
    series.push({
      name: Emotions[emotionName].name,
      data: value && value.map(v => Math.round(v * 100))
    });
  }

  const allEmotions = series.length > 1;

  const options = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      }
    },
    colors: colors,
    xaxis: {
      labels: {
        rotate: -45
      },
      title: {
        text: 'Llamadas',
        style: {
          color: '#D2CDCC'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 100
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
    <div class="LineChartEmotion">
      <h3 class={allEmotions ? 'allEmotionsTitle EmotionName' : 'EmotionName'}>
        {allEmotions || series.length === 0 ? 'Emociones' : series[0].name}
      </h3>
      <Chart
        series={series}
        options={options}
        type="line"
        height={allEmotions ? 400 : 250}
        width={allEmotions ? 700 : 500}
      />
    </div>
  );
};

export default LineChartEmotion;
