import React, { useState, useEffect } from 'react';
import './_style.scss';
import { Button, Icon, Row, Col } from 'antd';
import { now, dateHandler } from '../../../utils/func-helpers';
import HomeDatePickers from '../../molecules/HomeDatePickers/HomeDatePickers';
import CustomDropdown from '../../atoms/CustomDropdown/CustomDropdown';
import apiCalls from '../../../services/api-calls/all';
import PeriodCalls from '../../molecules/PeriodCalls/PeriodCalls';
import { ApiErrorMessage } from '../../../services/providers/Messages';
import RingCharts from '../../molecules/RingCharts/RingCharts';
import BarChart from '../../molecules/BarChart/BarChart';
import DayModal from '../../molecules/DayModal/DayModal';
import TotalCallsStatistic from '../../molecules/TotalCallsStatistic/total-calls-statistic';
import askPushNotificationPermission from '../../../webPush/askPushNotificationPermission';

const { getRingChartValues, getBarChartValues, getOperators, getCalls } = apiCalls();
const { formatForApi, format } = dateHandler;
const defaultDay = formatForApi(now);

const Dashboard = () => {
  const [operators, setOperators] = useState([]);
  const [dateFrom, setDateFrom] = useState(defaultDay);
  const [dateTo, setDateTo] = useState(defaultDay);
  const [operatorId, setOperatorId] = useState();
  const [ringChartValues, setRingChartValues] = useState();
  const [barChartValues, setBarChartValues] = useState([]);
  const [calls, setCalls] = useState([]);
  const [dayValue, setDayValue] = useState();
  const [showDayModal, setShowDayModal] = useState(false);
  const [amount, setAmount] = useState(0);

  const bringPageData = async (dateFrom, dateTo) => {
    const query = { dateFrom, dateTo };
    const chartsQuery = operatorId ? { ...query, operatorId } : query;
    const ringsValues = await getRingChartValues(chartsQuery);
    setRingChartValues(ringsValues);
    const barChartData = await getBarChartValues(chartsQuery);
    setBarChartValues(barChartData);
    const periodCalls = await getCalls(query);
    setCalls(periodCalls);
    setAmount(periodCalls.length);
  };

  useEffect(() => {
    const loadPage = async () => {
      try {
        askPushNotificationPermission();
        const operatorsList = await getOperators();
        setOperators(operatorsList);
        await bringPageData(dateTo, dateFrom);
      } catch (error) {
        ApiErrorMessage();
      }
    };
    loadPage();
  }, []);

  const handleFromDateChange = date => {
    const formattedDate = formatForApi(format(date));
    setDateFrom(formattedDate);
  };

  const handleToDateChange = date => {
    const formattedDate = formatForApi(format(date));
    setDateTo(formattedDate);
  };

  const handleSearch = async () => {
    try {
      await bringPageData(dateFrom, dateTo);
    } catch (error) {
      ApiErrorMessage();
    }
  };
  return (
    <div className="mainSectionContainer">
      <div className="titleSection">
        <h2>Dashboard</h2>
      </div>
      <div className="contentSectionContainer">
        <HomeDatePickers changeFromDate={handleFromDateChange} changeToDate={handleToDateChange} />
        <div className="operator">
          <span>Atendido por </span>
          <div className="operatorDropdown">
            <CustomDropdown placeholder="Operador" action={setOperatorId} content={operators} />
          </div>
        </div>
        <div className="searchContainer">
          <Button
            size="medium"
            shape="round"
            onClick={handleSearch}
            disabled={!dateTo || !dateFrom}
          >
            <Icon type="search" />
            <span>Buscar</span>
          </Button>
        </div>
        <Row >
          <Col span={6}>
            <div class="totalCalls">
              <TotalCallsStatistic amount={amount} />
            </div>
          </Col>
          <Col span={12}>
            <RingCharts values={ringChartValues} />
          </Col>
        </Row>
        <BarChart
          tagColor={'red'}
          tagDescription={'#Consultantes'}
          data={barChartValues}
          showDayModal={setShowDayModal}
          setDayModalDate={setDayValue}
        />
        <PeriodCalls calls={calls} />
        <DayModal visible={showDayModal} setVisible={setShowDayModal} defaultValue={dayValue} />
      </div>
    </div>
  );
};
export default Dashboard;
