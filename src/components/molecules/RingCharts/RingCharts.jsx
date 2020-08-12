import React from "react";
import CustomRingChart from "../../atoms/CustomRingChart/CustomRingChart";
import "./_style.scss";

const RingCharts = ({ data }) => {
  return (
    <div className="ringsContainer">
      <CustomRingChart text={"Miedo"} theme={"Fear"} percentage={"70"} />
      <CustomRingChart text={"Enojo"} theme={"Anger"} percentage={"70"} />
    </div>
  );
};

export default RingCharts;
