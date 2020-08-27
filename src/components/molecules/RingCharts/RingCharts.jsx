import React from 'react';
import CustomRingChart from '../../atoms/CustomRingChart/CustomRingChart';
import './_style.scss';
import { upTermRings, downTermRings } from '../../../utils/charts-helper/ring-chart-helper';

const RingCharts = ({ values }) => {
  const formattedValues = values;
  Object.keys(formattedValues).forEach(
    k => (formattedValues[k] = Math.round(formattedValues[k] * 100))
  );
  const createRings = rings =>
    rings.map(emotion => (
      <CustomRingChart
        key={emotion.id}
        emotionProps={emotion}
        percentage={formattedValues[emotion.id]}
      />
    ));
  return (
    <div className="ringsContainer">
      <div className="UpTerm">{createRings(upTermRings)}</div>
      <div className="DownTerm">{createRings(downTermRings)}</div>
    </div>
  );
};

RingCharts.defaultProps = {
  values: {
    sadness: 0,
    happiness: 0,
    fear: 0,
    neutrality: 0,
    anger: 0
  }
};

export default RingCharts;
