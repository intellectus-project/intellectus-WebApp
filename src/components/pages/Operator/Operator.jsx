import React, { useState, useEffect } from 'react';
import './_style.scss';
import { message, Button, Icon, Switch } from 'antd';
import moment from 'moment';
import CustomDatePicker from '../../atoms/CustomDatePicker/CustomDatePicker';
import CustomDropdown from '../../atoms/CustomDropdown/CustomDropdown';
import apiCalls from '../../../services/api-calls/all';
import DayModal from '../../molecules/DayModal/DayModal';
import OperatorEmotionTables from '../../molecules/OperatorEmotionTables';
import { getUrlParam, dateHandler, dateFormat } from '../../../utils/func-helpers';
import { formatEmotionTables } from '../../../utils/emotion-helper'
import OperatorEmotionStatus from '../../molecules/OperatorEmotionStatus/OperatorEmotionStatus';
import OperatorCalls from '../../molecules/OperatorCalls/OperatorCalls';

const { getOperatorEmotionStatus, getOperatorEmotionTables, getOperatorCalls } = apiCalls();

const Operator = () => {
  const [emotionStatus, setEmotionStatus] = useState({});
  const [emotionTables, setEmotionTables] = useState({});
  const [date, setDate] = useState(moment().format(dateFormat));
  const [calls, setCalls] = useState([]);
  const [name, setName] = useState();
  const [switchOn, setSwitchOn] = useState(true);

  const switchOnClick = () => {
    setSwitchOn(!switchOn);
  };

  const bringPageData = async (formattedDate) => {
    const userId = getUrlParam('id') ? getUrlParam('id') : null;
    const emotionStatusData = await getOperatorEmotionStatus(userId);
    setEmotionStatus(formatEmotionTables(emotionStatusData.status));
    setName(emotionStatusData.name)
    const emotionTablesData = await getOperatorEmotionTables(userId, formattedDate || date);
    setEmotionTables(formatEmotionTables(emotionTablesData));
    const callsData = await getOperatorCalls(userId, formattedDate || date);
    console.log(callsData)
    setCalls(callsData)
  };

  useEffect(() => {
    const loadPage = async () => {
      try { 
        const momentDate = dateHandler.format(date);
        await bringPageData(dateHandler.formatForApi(momentDate));
      } catch (error) {
        console.log(error);
        message.error('Hubo un error, por favor contacte con el administrador');
      }
    };
    loadPage();
  }, [date]);

  return (
    <div className="mainSectionContainer">
      
      <div className="titleSection">
        <div className="ant-row">
          <div class='ant-col-2'>
            <label class='operatorPageName'>{name}</label> 
          </div>
          <OperatorEmotionStatus emotionStatus={emotionStatus}/>
        </div>
      </div>
      <div className="contentSectionContainer">
        <div class='ant-row'>
          <div class='ant-col-12'>
            Cambiar vista
            <Switch onClick={switchOnClick} className='marginHorizontal' />
            <CustomDatePicker action={setDate} placeholder="Fecha" theme="datePicker"/>
          </div>
          <br/><br/>
        </div>
        <OperatorEmotionTables emotionTables={emotionTables} switchOn={switchOn} />
        <OperatorCalls calls={calls} />
      </div>
    </div>
  );
};
export default Operator;