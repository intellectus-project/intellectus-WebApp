import React, { useState } from 'react';
import { Card, Avatar, Icon, Tooltip, Modal, InputNumber } from 'antd';
import EmotionItem from '../../atoms/EmotionItem/EmotionItem';
import { useRedirect } from '../../Router/redirect';
import apiCalls from '../../../services/api-calls/all';
import { ApiErrorMessage, SuccessMessage } from '../../../services/providers/Messages';
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
  const { redirect, setUrlToRedirect } = useRedirect();

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await giveBreak({ operatorId: id, minutesDuration });
      SuccessMessage('Descanso otorgado con éxito.');
      setVisible(false);
      setLoading(false);
    } catch (error) {
      ApiErrorMessage();
      setLoading(false);
    }
  };

  const minutesDurationOnChange = minutes => {
    setMinutesDuration(minutes);
  };

  const handleSelect = () => setUrlToRedirect(`operator?id=${id}`);

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
    setVisible(true);
  };
  return (
    <Card
      bordered={true}
      style={{ marginTop: 15 }}
      size="small"
      actions={[
        <Icon type="select" onClick={handleSelect} />,
        <Icon type="clock-circle" onClick={showModal} />
      ]}
    >
      {redirect()}
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
