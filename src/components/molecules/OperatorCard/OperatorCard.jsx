import React, { useState } from 'react';
import { Card, Avatar, Icon, Tooltip, Modal, message } from 'antd';
import EmotionItem from '../../atoms/EmotionItem/EmotionItem';
import { useRedirect } from '../../Router/redirect';
import apiCalls from '../../../services/api-calls/all';
import { ApiErrorMessage, SuccessMessage } from '../../../services/providers/Messages';
const { info } = Modal;

const { giveBreak } = apiCalls();

const OperatorCard = ({
  id,
  name,
  lastName,
  primaryEmotion,
  secondaryEmotion,
  atBreak,
  inCall
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const fullName = `${name} ${lastName}`;
  const { redirect, setUrlToRedirect } = useRedirect();

  const handleConfirm = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        await giveBreak({ operatorId: id });
        SuccessMessage('Descanso otorgado con éxito.');
        setVisible(false);
        setLoading(false);
      }, 3000);
    } catch (error) {
      ApiErrorMessage();
      setLoading(false);
    }
  };

  const handleSelect = () => setUrlToRedirect(`operator/${id}`);

  const infoModal = () =>
    info({
      title: 'Descanso no disponible',
      content: `${fullName} ya tiene un descanso asignado, por favor espere a que finalice el mismo para otorgar un descanso.`
    });
  const showModal = () => (atBreak ? infoModal() : setVisible(true));
  const isAtBreak = atBreak && !inCall;
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
            <button onClick={() => alert('hi')}>{fullName}</button>
            {inCall && (
              <>
                <Tooltip title="El operador se encuentra en llamada.">
                  <Icon type="phone" style={{ color: '#79797c' }} />
                </Tooltip>
                {atBreak && (
                  <Tooltip title="El operador se tomará un tiempo de descanso al finalizar la llamada.">
                    <Icon type="info-circle" style={{ marginLeft: '2em', color: '#08c' }} />
                  </Tooltip>
                )}
              </>
            )}
            {isAtBreak && (
              <Tooltip title="El operador se encuentra en tiempo de descanso.">
                <Icon type="clock-circle" style={{ color: '#79797c' }} />
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
        >{`Está seguro que desea otorgarle un descanso a ${fullName}?`}</p>
      </Modal>
      <EmotionItem primaryEmotion={primaryEmotion} secondaryEmotion={secondaryEmotion} />
    </Card>
  );
};

export default OperatorCard;
