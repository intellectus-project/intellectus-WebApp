import React, { useState } from 'react';
import { Card, Avatar, Icon, Tooltip, Modal, InputNumber } from 'antd';
import EmotionItem from '../../atoms/EmotionItem/EmotionItem';
import apiCalls from '../../../services/api-calls/all';
import { ApiErrorMessage, SuccessMessage } from '../../../services/providers/Messages';
import { OPERATOR } from '../../../utils/constants';
const { info } = Modal;

const { giveBreak } = apiCalls();

const DEFAULT_MINUTES_DURATION = 10;

const OperatorCard = ({
  id,
  name,
  lastName,
  primaryEmotion,
  secondaryEmotion,
  atBreak,
  inCall,
  breakAssignedToActualCall
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [minutesDuration, setMinutesDuration] = useState(DEFAULT_MINUTES_DURATION);
  const fullName = `${name} ${lastName}`;

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await giveBreak({ operatorId: id, minutesDuration });
      SuccessMessage('Descanso otorgado con éxito.');
      setVisible(false);
      setLoading(false);
    } catch (error) {
      ApiErrorMessage('El operador no se encuentra en llamada');
      setLoading(false);
    }
  };

  const minutesDurationOnChange = minutes => {
    setMinutesDuration(minutes);
  };

  const infoModal = content =>
    info({
      title: 'Descanso no disponible',
      content: `${fullName} ${content}`
    });
  const showModal = () => {
    if (breakAssignedToActualCall)
      return infoModal(
        'ya tiene un descanso asignado, por favor espere a que finalice el mismo para otorgar un descanso.'
      );
    if (atBreak)
      return infoModal('está actualmente descansando, no es posible asignarle un descanso');
    if (!inCall) return infoModal('no se encuentra en llamada. Por favor intente en otro momento.');
    setVisible(true);
  };
  return (
    <Card
      bordered={true}
      style={{ marginTop: 15 }}
      size="small"
      actions={[
        <a href={`${OPERATOR}?id=${id}`}>
          <Icon type="select" />
        </a>,
        <Icon type="clock-circle" onClick={showModal} />
      ]}
    >
      <Card.Meta
        avatar={<Avatar src="img/avatarBlack.png" />}
        title={
          <>
            {fullName}
            {inCall && (
              <>
                <Tooltip title="El operador se encuentra en llamada.">
                  <Icon type="phone" style={{ color: '#79797c', marginLeft: '0.5em' }} />
                </Tooltip>
                {breakAssignedToActualCall && (
                  <Tooltip title="El operador se tomará un tiempo de descanso al finalizar la llamada.">
                    <Icon type="info-circle" style={{ marginLeft: '2em', color: '#08c' }} />
                  </Tooltip>
                )}
              </>
            )}
            {atBreak && (
              <Tooltip title="El operador se encuentra en tiempo de descanso.">
                <Icon type="clock-circle" style={{ color: '#79797c', marginLeft: '0.5em' }} />
              </Tooltip>
            )}
          </>
        }
      />
      <Modal
        title={
          <>
            <Icon type="exclamation-circle" style={{ color: '#f6b416' }} />
            {` Otorgar descanso`}
          </>
        }
        cancelText="Cancelar"
        visible={visible}
        confirmLoading={loading}
        onOk={handleConfirm}
        onCancel={() => setVisible(false)}
      >
        <p
          style={{ marginLeft: 15 }}
        >{`¿Está seguro que desea otorgarle un descanso a ${fullName}?`}</p>
        <p>
          Duración:{' '}
          <InputNumber
            min={5}
            max={20}
            defaultValue={DEFAULT_MINUTES_DURATION}
            onChange={minutesDurationOnChange}
          />{' '}
          minutos
        </p>
      </Modal>
      <EmotionItem primaryEmotion={primaryEmotion} secondaryEmotion={secondaryEmotion} />
    </Card>
  );
};

export default OperatorCard;
