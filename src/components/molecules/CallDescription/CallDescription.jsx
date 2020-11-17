import React, { useState } from 'react';
import { Card } from 'antd';
import './_style.scss';
import '../../../css/app.scss';
import PropTypes from 'prop-types';
import { formatDateWithTime, differenceBetween, formatDate } from '../../../utils/func-helpers';
import EmotionIcon from '../../atoms/Emotion/Emotion-icon';
import EMOTIONS from '../../../utils/emotions';
import DayModal from '../DayModal/DayModal';

const CallDescription = ({ operatorName, startTime, endTime, weather, shift, emotion }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Card
        size="medium"
        title="Información de la llamada"
        extra={
          <button onClick={() => setVisible(true)}>
            {' '}
            <strong>Ver información dia</strong>
          </button>
        }
        style={{ width: 400 }}
      >
        <p>
          <strong>Operador: </strong>
          {operatorName}
        </p>
        <p>
          <strong>Fecha: </strong>
          {formatDateWithTime(startTime)}
        </p>
        <p>
          <strong>Duración: </strong>
          {differenceBetween(endTime, startTime) + ' ' + 'minutos'}
        </p>
        <p>
          <strong>Clima: </strong>
          {weather}
        </p>
        <p>
          <strong>Turno: </strong>
          {shift}
        </p>
        <p>
          <EmotionIcon emotion={EMOTIONS[emotion]} />
        </p>
      </Card>
      <DayModal
        defaultValue={startTime ? formatDate(startTime) : startTime}
        setVisible={setVisible}
        visible={visible}
      />
    </>
  );
};

CallDescription.propTypes = {
  operatorName: PropTypes.string.isRequired,
  startTime: PropTypes.instanceOf(Date),
  endTime: PropTypes.instanceOf(Date),
  weather: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired
};

export default CallDescription;
