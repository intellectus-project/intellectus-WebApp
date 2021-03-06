import React, { useEffect, useState, useContext } from 'react';
import { LinkContext } from '../../../services/providers/prev-link';
import './_style.scss';
import '../../../css/app.scss';
import { Row, Col, Alert } from 'antd';
import apiCalls from '../../../services/api-calls/all';
import CallDescription from '../../molecules/CallDescription/CallDescription';
import ConsultantOperatorBarChart from '../../molecules/ConsultantOperatorBarChart/Consultant-operator-bar-chart';
import { getUrlParam } from '../../../utils/func-helpers';
import BackButton from '../../atoms/BackButton/back-button';

const { getCallById } = apiCalls();

const ParticularCall = () => {
  const { prevLink } = useContext(LinkContext);
  const [breakDurationMinutes, setBrekDurationMinutes] = useState(0);
  const [breakTaken, setBreakTaken] = useState();
  const [consultantStats, setConsultantStats] = useState({});
  const [emotion, setEmotion] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [operator, setOperator] = useState({});
  const [operatorStats, setOperatorStats] = useState({});
  const [weatherImage, setWeather] = useState({});

  const getCall = async () => {
    const callId = getUrlParam('id');
    const response = await getCallById(callId);
    setBrekDurationMinutes(response.breakDurationMinutes);
    setBreakTaken(response.breakTaken);
    setConsultantStats(response.consultantStats);
    setEmotion(response.emotion);
    setStartTime(response.startTime);
    setEndTime(response.endTime);
    setOperator(response.operator);
    setOperatorStats(response.operatorStats);
    setWeather(response.weatherImage);
  };

  useEffect(() => {
    getCall();
  }, []);

  return (
    <div>
      <BackButton toUrl={prevLink.prevLink} id={prevLink.id}/>
      <div class="alertContainer">
        {breakTaken && (
          <Alert
            message={`El operador se tomó un descanso de ${breakDurationMinutes} minutos en esta llamada`}
            type="info"
            showIcon
          />
        )}
      </div>
      <div class="graphContainer">
        <Row>
          <Col span={8}>
            <CallDescription
              emotion={emotion}
              operatorName={operator.name}
              startTime={startTime}
              endTime={endTime}
              weatherImage={weatherImage}
            />
          </Col>
          <Col span={12}>
            <ConsultantOperatorBarChart
              operatorStats={operatorStats}
              consultantStats={consultantStats}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ParticularCall;
