import React from 'react';
import { Card, Avatar, Icon, Tooltip } from 'antd';
import EmotionItem from '../EmotionItem/EmotionItem';
const OperatorCard = ({ name, lastName, primaryEmotion, secondaryEmotion, inCall }) => (
  <Card bordered={true} style={{ marginTop: 15 }} size='small'>
    <Card.Meta
      avatar={<Avatar src="img/avatarBlack.png" />}
      title={
        <>
          <button onClick={() => alert('hi')}>
            {`${name} ${lastName} `}
            <Icon type="select" style={{ marginLeft: '0.4em', color: '#08c' }} />
          </button>
          {inCall && (
            <Tooltip title="El operador se encuentra en llamada ">
              <Icon type="phone" style={{ marginLeft: '0.7em' }} />
            </Tooltip>
          )}
        </>
      }
    />
    <EmotionItem primaryEmotion={primaryEmotion} secondaryEmotion={secondaryEmotion} />
  </Card>
);

export default OperatorCard;
