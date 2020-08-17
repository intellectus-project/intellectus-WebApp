import React, { useState, useEffect } from 'react';
import './_style.scss';
import { Button, Icon } from 'antd';
import moment from 'moment';
import CustomDatePicker from '../../atoms/CustomDatePicker/CustomDatePicker';
import CustomDropdown from '../../atoms/CustomDropdown/CustomDropdown';
import apiCalls from '../../../services/api-calls/all';
import NewsEventsTable from '../../molecules/NewsEventsTable/NewsEventsTable';
import RingCharts from '../../molecules/RingCharts/RingCharts';

const { getRingChartValues, getNewEvents, getOperators } = apiCalls();

const dateFormat = 'YYYY-MM-DD';

const Dashboard = () => {
  const [operators, setOperators] = useState();
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [operatorId, setOperatorId] = useState();
  const [ringChartValues, setRingChartValues] = useState();
  const [newsEvents, setNewsEvents] = useState([]);

  useEffect(() => {
    const loadPage = async () => {
      const operatorsList = await getOperators();
      setOperators(operatorsList);
      setDateFrom(moment.now().format(dateFormat));
      setDateTo(moment.now().format(dateFormat));
    };
    loadPage();
  }, []);

  const handleSearch = async () => {
    const query = { dateFrom, dateTo };
    const ringsValues = await getRingChartValues(operatorId ? { ...query, operatorId } : query);
    Object.keys(ringsValues).forEach(k => (ringsValues[k] = (ringsValues[k] * 100).toFixed(2)));
    setRingChartValues(ringsValues);
    const newsEventsValues = await getNewEvents(query);
    setNewsEvents(newsEventsValues);
  };

  return (
    <div className="mainSectionContainer">
      <div className="titleSection">
        <h2>Dashboard</h2>
      </div>
      <div className="contentSectionContainer">
        <CustomDatePicker changeFromDate={setDateFrom} changeToDate={setDateTo} />
        <CustomDropdown placeholder="Operador" action={setOperatorId} content={operators} />
        <div className="searchContainer">
          {/* TODO: make this button disabled if no dates are picked, and create a theme for that */}
          <Button onClick={handleSearch}>
            <Icon type="search" />
            <span>Buscar</span>
          </Button>
        </div>
        <RingCharts values={ringChartValues} />
        <NewsEventsTable newsEvents={newsEvents} />
      </div>
    </div>
  );
};
export default Dashboard;
