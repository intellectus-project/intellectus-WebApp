import React, { useState, useEffect, useContext } from 'react';
import { LinkContext } from '../../../services/providers/prev-link';
import './_style.scss';
import { dateHandler } from '../../../utils/func-helpers';
import { Col, Row, Button, Tooltip, Icon } from 'antd';
import OperatorsChart from '../../molecules/OperatorsChart/OperatorsChart';
import apiCalls from '../../../services/api-calls/all';
import LoadingSpinner from '../../atoms/LoadingSpinner/LoadingSpinner';
import OperatorCard from '../../molecules/OperatorCard/OperatorCard';
import { ApiErrorMessage } from '../../../services/providers/Messages';
import BackButton from '../../atoms/BackButton/back-button';
import { OPERATORS_URL } from '../../../utils/constants';

const { getBarChartByOperators, getOperators } = apiCalls();

const Operators = () => {
  const { currentTime } = dateHandler;
  const { setPrevLink } = useContext(LinkContext);
  const [barChartData, setBarChartData] = useState([]);
  const [operators, setOperators] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(currentTime());
  const [pageLoading, setPageLoading] = useState(false);

  const fetchData = async () => {
    const barChart = await getBarChartByOperators();
    const operatorsInfo = await getOperators();
    setOperators(operatorsInfo);
    setBarChartData(barChart);
  };

  useEffect(() => {
    try {
      setPageLoading(true);
      fetchData();
      setPageLoading(false);
    } catch (err) {
      ApiErrorMessage();
      setPageLoading(false);
    }
  }, []);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const operatorsInfo = await getOperators();
      setOperators(operatorsInfo);
      setLastUpdate(currentTime());
      setLoading(false);
    } catch (err) {
      ApiErrorMessage();
      setLoading(false);
    }
  };

  const handleCardClick = () => setPrevLink({ prevLink: OPERATORS_URL });

  return (
    <>
      <div className="titleSection">
        <h2>Operadores</h2>
      </div>
      <div className="contentSection">
        <div className="headerButtons">
          <div className="buttonsContainer">
            <BackButton toUrl={'/dashboard'} text={'Ir a Dashboard'} />
            <Tooltip title="Actualizar">
              <Button
                className="updateButton"
                icon="sync"
                shape="circle"
                onClick={handleUpdate}
                loading={loading}
                disabled={pageLoading}
              />
            </Tooltip>
            {!pageLoading && <span id="lastUpdate">{`Última actualización ${lastUpdate}`}</span>}
          </div>
        </div>
        {pageLoading ? (
          <LoadingSpinner />
        ) : (
            <>
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
                      handleOperatorClick={handleCardClick}
                    />
                  </Col>
                ))}
              </Row>
              <p id="rendimientos">Rendimientos durante el día</p>
              <OperatorsChart data={barChartData} />
            </>
          )}
      </div>
    </>
  );
};

export default Operators;
