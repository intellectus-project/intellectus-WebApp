import React from 'react';
import CustomRingChart from '../../atoms/CustomRingChart/CustomRingChart';
import './_style.scss';
import { upTermRings, downTermRings } from '../../../utils/charts-helper/ring-chart-helper';

const RingCharts = ({ values }) => {
  const createRings = (rings) =>
    rings.map((emotion) => (
      <CustomRingChart key={emotion.key} emotionProps={emotion} percentage={values[emotion.id]} />
    ));
  return (
    <div className="ringsContainer">
      <div className="UpTerm">{createRings(upTermRings)}</div>
      <div className="DownTerm">{createRings(downTermRings)}</div>
    </div>
  );
};

// TODO: this will change when we define which data will be shown as default,
// it should be a range of time like last 15 days
RingCharts.defaultProps = {
  values: {
    sadness: 0,
    happiness: 0,
    fear: 0,
    neutrality: 0,
    anger: 0,
  },
};

export default RingCharts;
