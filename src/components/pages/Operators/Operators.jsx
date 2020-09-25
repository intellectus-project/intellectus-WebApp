import React, { useState, useEffect } from 'react';
import './_style.scss';
import { Col, Row } from 'antd';
import OperatorsChart from '../../molecules/OperatorsChart/OperatorsChart';
import apiCalls from '../../../services/api-calls/all';
import OperatorCard from '../../atoms/OperatorCard/OperatorCard';

const { getBarChartByOperators, getOperators } = apiCalls();

const Operators = () => {
  const [barChartData, setBarChartData] = useState([]);
  const [operators, setOperators] = useState([]);

  const fetchData = async () => {
    const barChart = await getBarChartByOperators();
    const operatorsInfo = await getOperators();
    setOperators(operatorsInfo);
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
        <div className="cards-wrapper">
          <Row gutter={16}>
            {operators.map(o => (
              <Col span={8}>
                <OperatorCard
                  name={o.name}
                  lastName={o.lastName}
                  primaryEmotion={o.primaryEmotion}
                  secondaryEmotion={o.secondaryEmotion}
                />
              </Col>
            ))}
          </Row>
        </div>
        <p id="rendimientos">Rendimientos durante el día</p>
        <OperatorsChart data={barChartData} />
      </div>
    </>
  );
};

export default Operators;
