import React, { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import './_style.scss';
import '../../../css/app.scss';
import { Row, Col } from 'antd';
import apiCalls from "../../../services/api-calls/all";
import CallDescription from '../../molecules/CallDescription/CallDescription';
import EmotionIcon from '../../atoms/Emotion/Emotion-icon';
import EMOTIONS from '../../../utils/emotions';
import ConsultantOperatorBarChart from '../../molecules/ConsultantOperatorBarChart/Consultant-operator-bar-chart';


const { getCallById } = apiCalls();

const ParticularCall = () => {
    const [breakDurationMinutes, setBrekDurationMinutes] = useState(0);
    const [breakTaken, setBreakTaken] = useState();
    const [consultantStats, setConsultantStats] = useState({});
    const [emotion, setEmotion] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [operator, setOperator] = useState({});
    const [operatorStats, setOperatorStats] = useState({});
    const [shift, setShift] = useState({});
    const [weather, setWeather] = useState({});


    const getCall = () => {
        const response = getCallById();
        setBrekDurationMinutes(response.breakDurationMinutes);
        setBreakTaken(response.breakTaken);
        setConsultantStats(response.consultantStats);
        setEmotion(response.emotion);
        setStartTime(response.startTime);
        setEndTime(response.endTime);
        setOperator(response.operator);
        setOperatorStats(response.operatorStats);
        setShift(response.shift);
        setWeather(response.weather);
        console.log(response);
    }

    useEffect(() => {
        getCall();
    }, []);

    return (
        <div>
            <Row>
                <Col span={8}><CallDescription operatorName={operator.name} startTime={startTime} endTime={endTime} shift={shift.name} weather={weather.description} /></Col>
                <Col span={12}><ConsultantOperatorBarChart /></Col>
            </Row>
                
                
            <EmotionIcon emotion={EMOTIONS[emotion]} />
        </div >
    );
}

export default ParticularCall;
