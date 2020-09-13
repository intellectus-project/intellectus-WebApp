import React, { useState, useEffect } from 'react';
import './_style.scss';
import { message, Button, Icon } from 'antd';
import moment from 'moment';
import HomeDatePickers from '../../molecules/HomeDatePickers/HomeDatePickers';
import CustomDropdown from '../../atoms/CustomDropdown/CustomDropdown';
import apiCalls from '../../../services/api-calls/all';
import PeriodCalls from '../../molecules/PeriodCalls/PeriodCalls';
import NewsEventsTable from '../../molecules/NewsEventsTable/NewsEventsTable';
import RingCharts from '../../molecules/RingCharts/RingCharts';
import BarChart from '../../molecules/BarChart/BarChart';
import DayModal from '../../molecules/DayModal/DayModal';

const { getRingChartValues, getBarChartValues, getNewEvents, getOperators, getCalls } = apiCalls();

const dateFormat = 'YYYY-MM-DD';

const Dashboard = () => {
  const [operators, setOperators] = useState([]);
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [operatorId, setOperatorId] = useState();
  const [ringChartValues, setRingChartValues] = useState();
  const [barChartValues, setBarChartValues] = useState([]);
  const [newsEvents, setNewsEvents] = useState([]);
  const [calls, setCalls] = useState([]);
  const [dayValue, setDayValue] = useState();
  const [showDayModal, setShowDayModal] = useState(false);

  const bringPageData = async (dateFrom, dateTo) => {
    const query = { dateFrom, dateTo };
    const chartsQuery = operatorId ? { ...query, operatorId } : query;
    const ringsValues = await getRingChartValues(chartsQuery);
    setRingChartValues(ringsValues);
    const barChartData = await getBarChartValues(chartsQuery);
    setBarChartValues(barChartData);
    const newsEventsValues = await getNewEvents(query);
    setNewsEvents(newsEventsValues);
    const periodCalls = await getCalls(query);
    setCalls(periodCalls);
  };

  useEffect(() => {
    const loadPage = async () => {
      try {
        const operatorsList = await getOperators();
        setOperators(operatorsList);
        const actualDate = moment().format(dateFormat);
        setDateFrom(actualDate);
        setDateTo(actualDate);
        await bringPageData(actualDate, actualDate);
      } catch (error) {
        message.error('Hubo un error, por favor contacte con el administrador');
      }
    };
    loadPage();
  }, []);

  const handleSearch = async () => {
    try {
      await bringPageData(dateFrom, dateTo);
    } catch (error) {
      message.error('Hubo un error, por favor contacte con el administrador');
    }
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
        <BarChart
          data={barChartValues}
          showDayModal={setShowDayModal}
          setDayModalDate={setDayValue}
        />
        <PeriodCalls calls={calls} />
        <DayModal visible={showDayModal} setVisible={setShowDayModal} defaultValue={dayValue} />
        <NewsEventsTable newsEvents={newsEvents} />
      </div>
    </div>
  );
};
export default Dashboard;
