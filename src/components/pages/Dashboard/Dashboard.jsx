import React, { useState, useEffect } from "react";
import "./_style.scss";
import { Button, Icon } from "antd";
import CustomDatePicker from "../../atoms/CustomDatePicker/CustomDatePicker";
import CustomDropdown from "../../atoms/CustomDropdown/CustomDropdown";
import apiCalls from "../../../services/api-calls/all";

import RingCharts from "../../molecules/RingCharts/RingCharts";

const { getRingChartValues } = apiCalls();

const Dashboard = () => {
  const [operators, setOperators] = useState();
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [operatorValue, setOperatorValue] = useState();
  const [ringChartValues, setRingChartValues] = useState();

  useEffect(() => {
    // TODO: read operators and setOperators
  }, []);

  const handleSearch = async () => {
    const ringsQuery = { dateFrom, dateTo };
    if (operatorValue) ringsQuery.operatorId = operatorValue;
    const ringsValues = await getRingChartValues(ringsQuery);
    Object.keys(ringsValues).forEach(k => (ringsValues[k] = (ringsValues[k] * 100).toFixed(2)));
    setRingChartValues(ringsValues);
  };

  return (
    <div className="mainSectionContainer">
      <div className="titleSection">
        <h2>Dashboard</h2>
      </div>
      <div className="contentSectionContainer">
        <CustomDatePicker
          changeFromDate={setDateFrom}
          changeToDate={setDateTo}
        />
        <CustomDropdown
          placeholder="Operador"
          action={setOperatorValue}
          content={operators}
        />
        <div className="searchContainer">
          {/* TODO: make this button disabled if no dates are picked, and create a theme for that */}
          <Button onClick={handleSearch}>
            <Icon type="search" />
            <span>Buscar</span>
          </Button>
        </div>
        <RingCharts values={ringChartValues} />
      </div>
    </div>
  );
};
export default Dashboard;
