import React, { useState, useEffect } from 'react';
import './_style.scss';
import OperatorsChart from '../../molecules/OperatorsChart/OperatorsChart';
import apiCalls from '../../../services/api-calls/all';

const { getBarChartByOperators } = apiCalls();

const Operators = () => {
  const [barChartData, setBarChartData] = useState([]);
  const fetchData = async () => {
    const barChart = await getBarChartByOperators();
    setBarChartData(barChart);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // setInterval(bringOperators(),5000);
  return (
    <>
      <div className="titleSection">
        <h2>Operadores</h2>
      </div>
      <div className="contentSection">
        {/*TODO: crear operators cards */}
        <p>Rendimientos durante el día</p>
        <OperatorsChart data={barChartData} />
      </div>
    </>
  );
};

export default Operators;
