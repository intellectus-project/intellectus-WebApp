import React from "react";
import CustomRingChart from "../../atoms/CustomRingChart/CustomRingChart";
import "./_style.scss";
import {
  fear,
  anguish,
  happiness,
  neutral,
  anger,
} from "../../../utils/charts-helper/ring-chart-helper";

const RingCharts = ({ values }) => {
  const {
    sadness: sadnessPerc,
    happiness: happinessPerc,
    fear: fearPerc,
    neutrality: neutralPerc,
    anger: angerPerc,
  } = values;
  return (
    <div className="ringsContainer">
      <div className="UpTerm">
        <CustomRingChart
          id="anguish"
          emotionProps={anguish}
          percentage={sadnessPerc}
        />
        <CustomRingChart
          id="happiness"
          emotionProps={happiness}
          percentage={happinessPerc}
        />
      </div>
      <div className="DownTerm">
        <CustomRingChart
          id="anger"
          emotionProps={anger}
          percentage={angerPerc}
        />
        <CustomRingChart
          id="neutral"
          emotionProps={neutral}
          percentage={neutralPerc}
        />
        <CustomRingChart id="fear" emotionProps={fear} percentage={fearPerc} />
      </div>
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
