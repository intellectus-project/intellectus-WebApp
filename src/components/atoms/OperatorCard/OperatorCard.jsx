import React, { useState } from 'react';
import { Card, Avatar, Icon, Tooltip, Modal } from 'antd';
import EmotionItem from '../EmotionItem/EmotionItem';
const { info, confirm } = Modal;

const OperatorCard = ({ name, lastName, primaryEmotion, secondaryEmotion, atBreak, inCall }) => {
  const [modal, setModal] = useState();
  const fullName = `${name} ${lastName}`;
  const confirmModal = () =>
    confirm({
      title: 'Otorgar descanso',
      icon: <Icon type="exclamation-circle" />,
      content: `Está seguro que desea otorgarle un descanso a ${fullName}?`,
      cancelText: 'Cancelar',
      onOk() {
        console.log('ok');
      },
      onCancel() {
        console.log('cancel');
      }
    });
  const infoModal = () =>
    info({
      title: 'Descanso no disponible',
      content: `${fullName} ya tiene un descanso asignado, por favor espere a que finalice el mismo para otorgar un descanso.`
    });
  const showModal = () => (atBreak ? infoModal() : confirmModal());
  const isAtBreak = atBreak && !inCall;
  return (
    <Card
      bordered={true}
      style={{ marginTop: 15 }}
      size="small"
      actions={[
        <Icon type="select" onClick={() => alert('hi')} />,
        <Icon type="clock-circle" onClick={() => showModal()} />
      ]}
    >
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
      <EmotionItem primaryEmotion={primaryEmotion} secondaryEmotion={secondaryEmotion} />
    </Card>
  );
};

export default OperatorCard;
