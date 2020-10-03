import React, { useState, useEffect } from 'react';
import './_style.scss';
import { Col, Row } from 'antd';
import OperatorsChart from '../../molecules/OperatorsChart/OperatorsChart';
import apiCalls from '../../../services/api-calls/all';
import OperatorCard from '../../molecules/OperatorCard/OperatorCard';
import { ApiErrorMessage } from '../../../services/providers/Messages';

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
    try {
      fetchData();
    } catch (err) {
      ApiErrorMessage();
    }
  }, []);

  // setInterval(bringOperators(),5000);
  return (
    <>
      <div className="titleSection">
        <h2>Operadores</h2>
      </div>
      <div className="contentSection">
        <Row gutter={16}>
          {operators.map(o => (
            <Col span={6}>
              <OperatorCard
                id={o.id}
                name={o.name}
                lastName={o.lastName}
                primaryEmotion={o.primaryEmotion}
                secondaryEmotion={o.secondaryEmotion}
                atBreak={o.atBreak}
                inCall={o.inCall}
                breakAssignedToActualCall={o.breakAssignedToActualCall}
              />
            </Col>
          ))}
        </Row>
        <p id="rendimientos">Rendimientos durante el día</p>
        <OperatorsChart data={barChartData} />
      </div>
    </>
  );
};

export default Operators;
