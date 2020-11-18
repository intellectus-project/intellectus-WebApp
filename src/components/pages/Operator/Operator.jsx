import React, { useState, useEffect, useContext } from 'react';
import './_style.scss';
import { message, Switch } from 'antd';
import moment from 'moment';
import { UserContext } from '../../../services/providers/user-context.jsx';
import { LinkContext } from '../../../services/providers/prev-link';
import CustomDatePicker from '../../atoms/CustomDatePicker/CustomDatePicker';
import apiCalls from '../../../services/api-calls/all';
import OperatorEmotionTables from '../../molecules/OperatorEmotionTables';
import { getUrlParam, dateHandler, dateFormat } from '../../../utils/func-helpers';
import { formatEmotionTables } from '../../../utils/emotion-helper';
import OperatorEmotionStatus from '../../molecules/OperatorEmotionStatus/OperatorEmotionStatus';
import OperatorCalls from '../../molecules/OperatorCalls/OperatorCalls';
import BackButton from '../../atoms/BackButton/back-button';
import BreaksTable from '../../molecules/BreaksTable/breaks-table';
import { ROLE_VIEWER } from '../../../utils/constants';

const {
  getOperatorEmotionStatus,
  getOperatorEmotionTables,
  getOperatorCalls,
  getBreaksByOperator
} = apiCalls();

const Operator = () => {
  const [id, setId] = useState();
  const [emotionStatus, setEmotionStatus] = useState({});
  const [emotionTables, setEmotionTables] = useState({});
  const [date, setDate] = useState(moment().format(dateFormat));
  const [calls, setCalls] = useState([]);
  const [name, setName] = useState();
  const [switchOn, setSwitchOn] = useState(false);
  const [breaks, setBreaks] = useState([]);

  const { user } = useContext(UserContext);
  const { prevLink, setPrevLink } = useContext(LinkContext);

  const switchOnClick = () => {
    setSwitchOn(!switchOn);
  };

  const bringPageData = async formattedDate => {
    const userId = getUrlParam('id');
    setId(userId);
    const emotionStatusData = await getOperatorEmotionStatus(userId);
    setEmotionStatus(formatEmotionTables(emotionStatusData.status));
    setName(emotionStatusData.name);
    const emotionTablesData = await getOperatorEmotionTables(userId, formattedDate || date);
    setEmotionTables(formatEmotionTables(emotionTablesData));
    const callsData = await getOperatorCalls(userId, formattedDate || date);
    setCalls(callsData);
    fetchBreaks(userId, formattedDate || date);
  };

  const fetchBreaks = async (userId, date) => {
    const dayBreaks = await getBreaksByOperator({
      dateFrom: date,
      dateTo: date,
      operatorId: userId
    });
    setBreaks(dayBreaks);
  };

  useEffect(() => {
    const loadPage = async () => {
      try {
        const momentDate = dateHandler.format(date);
        await bringPageData(dateHandler.formatForApi(momentDate));
      } catch (error) {
        message.error('Hubo un error, por favor contacte con el administrador');
      }
    };
    loadPage();
  }, [date]);

  const handleCallClick = () => setPrevLink({ prevLink: '/operator', id });

  return (
    <div className="mainSectionContainer">
      {user.role !== ROLE_VIEWER && <BackButton toUrl={prevLink.prevLink} />}
      <div className="titleSection">
        <div className="ant-row">
          <div class="ant-col-4">
            <label class="operatorPageStatusName">Estado actual de</label>{' '}
            <label class="operatorPageName">{name}</label>
          </div>
          <OperatorEmotionStatus emotionStatus={emotionStatus} />
        </div>
      </div>
      <div className="contentContainer">
        <div class="ant-row">
          <div class="ant-col-12">
            Cambiar vista
            <Switch onClick={switchOnClick} className="marginHorizontal" />
            <CustomDatePicker action={setDate} placeholder="Fecha" theme="datePicker" />
          </div>
          <br />
          <br />
        </div>
        <OperatorEmotionTables emotionTables={emotionTables} switchOn={switchOn} />
        <OperatorCalls calls={calls} handleCallClick={handleCallClick} />
        <BreaksTable breaks={breaks} />
      </div>
    </div>
  );
};
export default Operator;
