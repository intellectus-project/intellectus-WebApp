import React from "react";
import "./_style.scss";
import { Button, Icon } from "antd";
import { useState } from "react";
import CustomDatePicker from "../../atoms/CustomDatePicker/CustomDatePicker";
import CustomDropdown from "../../atoms/CustomDropdown/CustomDropdown";
import { useEffect } from "react";
import RingCharts from '../../molecules/RingCharts/RingCharts';

const Dashboard = () => {
  const [operators, setOperators] = useState();
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [operatorValue, setOperatorValue] = useState();
 
  useEffect(() => {
    // TODO: read operators and setOperators
  }, []);

  const handleSearch = () => {
    // TODO: call functions necessary to get charts and tables
  };
  return (
    <div className="mainSectionContainer">
      <div className="titleSection">
        <h2>Dashboard</h2>
      </div>
      <div className="contentSectionContainer">
        <CustomDatePicker actionTo={setDateTo} actionFrom={setDateFrom} />
        <CustomDropdown
          placeholder="Operador"
          action={setOperatorValue}
          content={operators}
        />
        <div className="searchContainer">
          <Button onClick={handleSearch}>
            <Icon type="search" />
            <span>Buscar</span>
          </Button>
        </div>
        <RingCharts/>
      </div>
    </div>
  );
};
export default Dashboard;
