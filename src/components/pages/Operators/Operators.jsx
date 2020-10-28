import React, { useState, useEffect } from 'react';
import './_style.scss';
import { Col, Row, Button, Icon, Tooltip } from 'antd';
import OperatorsChart from '../../molecules/OperatorsChart/OperatorsChart';
import apiCalls from '../../../services/api-calls/all';
import OperatorCard from '../../molecules/OperatorCard/OperatorCard';
import { ApiErrorMessage } from '../../../services/providers/Messages';
import BackButton from '../../atoms/BackButton/back-button';

const { getBarChartByOperators, getOperators } = apiCalls();

const Operators = () => {
  const [barChartData, setBarChartData] = useState([]);
  const [operators, setOperators] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const operatorsInfo = await getOperators();
      setOperators(operatorsInfo);
      setLoading(false);
    } catch (err) {
      ApiErrorMessage();
      setLoading(false);
    }
  };

  return (
    <>
      <div className="titleSection">
        <h2>Operadores</h2>
      </div>
      <div className="contentSection">
        <div className="headerButtons">
          <div className="buttonsContainer">
          <BackButton toUrl={'/dashboard'} />
          <Tooltip title="Actualizar"><Button
            className="updateButton"
            icon="sync"
            shape="circle"
            onClick={handleUpdate}
            loading={loading}
          />
          </Tooltip>
          </div>
        </div>
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
