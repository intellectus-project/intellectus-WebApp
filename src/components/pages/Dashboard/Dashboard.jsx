import React, { useState, useEffect } from 'react';
import './_style.scss';
import { Button, Icon } from 'antd';
import moment from 'moment';
import HomeDatePickers from '../../molecules/HomeDatePickers/HomeDatePickers';
import CustomDropdown from '../../atoms/CustomDropdown/CustomDropdown';
import apiCalls from '../../../services/api-calls/all';
import NewsEventsTable from '../../molecules/NewsEventsTable/NewsEventsTable';
import RingCharts from '../../molecules/RingCharts/RingCharts';
import BarChart from '../../molecules/BarChart/BarChart';

const { getRingChartValues, getBarChartValues, getNewEvents, getOperators } = apiCalls();

const dateFormat = 'YYYY-MM-DD';

const Dashboard = () => {
  const [operators, setOperators] = useState([]);
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [operatorId, setOperatorId] = useState();
  const [ringChartValues, setRingChartValues] = useState();
  const [barChartValues, setBarChartValues] = useState([]);
  const [newsEvents, setNewsEvents] = useState([]);

  useEffect(() => {
    const loadPage = async () => {
      try {
        // FIXME: abstraer esta logica a una funcion asi se llama en el loader y en el handleSearch
        const operatorsList = await getOperators();
        setOperators(operatorsList);
        const actualDate = moment().format(dateFormat);
        setDateFrom(actualDate);
        setDateTo(actualDate);
        const query = { dateFrom: actualDate, dateTo: actualDate };
        const ringsValues = await getRingChartValues(operatorId ? { ...query, operatorId } : query);
        // FIXME: move this formatting into ringChart component
        Object.keys(ringsValues).forEach(k => (ringsValues[k] = Math.round(ringsValues[k] * 100)));
        setRingChartValues(ringsValues);
        const barChartData = await getBarChartValues(operatorId ? { ...query, operatorId } : query);
        setBarChartValues(barChartData);
        const newsEventsValues = await getNewEvents(query);
        setNewsEvents(newsEventsValues);
      } catch (error) {
        // TODO: mostrar un toggle con error generico
      }
    };
    loadPage();
  }, []);

  const handleSearch = async () => {
    const query = { dateFrom, dateTo };
    const ringsValues = await getRingChartValues(operatorId ? { ...query, operatorId } : query);
    // FIXME: move this formatting into ringChart component
    Object.keys(ringsValues).forEach(k => (ringsValues[k] = (ringsValues[k] * 100).toFixed(2)));
    setRingChartValues(ringsValues);
    const barChartData = await getBarChartValues(operatorId ? { ...query, operatorId } : query);
    setBarChartValues(barChartData);
    const newsEventsValues = await getNewEvents(query);
    setNewsEvents(newsEventsValues);
  };

  return (
    <div className="mainSectionContainer">
      <div className="titleSection">
        <h2>Dashboard</h2>
      </div>
      <div className="contentSectionContainer">
        <HomeDatePickers changeFromDate={setDateFrom} changeToDate={setDateTo} />
        <CustomDropdown placeholder="Operador" action={setOperatorId} content={operators} />
        <div className="searchContainer">
          <Button
            size="medium"
            shape="round"
            onClick={handleSearch}
            disabled={!dateTo && !dateFrom}
          >
            <Icon type="search" />
            <span>Buscar</span>
          </Button>
        </div>
        <RingCharts values={ringChartValues} />
        <BarChart data={barChartValues} />
        <NewsEventsTable newsEvents={newsEvents} />
      </div>
    </div>
  );
};
export default Dashboard;
