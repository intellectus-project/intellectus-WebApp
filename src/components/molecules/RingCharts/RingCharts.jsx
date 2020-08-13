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

const RingCharts = ({ data }) => {
  return (
    <div className="ringsContainer">
      <div className="UpTerm">
        <CustomRingChart
          id="anguish"
          emotionProps={anguish}
          percentage={"70"}
        />
        <CustomRingChart
          id="happiness"
          emotionProps={happiness}
          percentage={"70"}
        />
      </div>
      <div className="DownTerm">
        <CustomRingChart id="anger" emotionProps={anger} percentage={"70"} />
        <CustomRingChart
          id="neutral"
          emotionProps={neutral}
          percentage={"70"}
        />
        <CustomRingChart id="fear" emotionProps={fear} percentage={"70"} />
      </div>
    </div>
  );
};

export default RingCharts;
