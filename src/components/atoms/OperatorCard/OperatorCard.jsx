import React from 'react';
import { Card, Avatar, Icon } from 'antd';
import EMOTIONS from '../../../utils/emotions';

const OperatorCard = ({
    name,
    lastName,
    primaryEmotion,
    secondaryEmotion
}) => (
  <Card bordered={false} style={{ marginTop: 10 }}>
    <Card.Meta
      avatar={<Avatar src="img/avatarBlack.png" />}
      title={
        <>
          <button onClick={() => alert('hi')}>
            {`${name} ${lastName} `}
            <Icon type="select" />
          </button>
        </>
      }
    />
    <div>
      <br />
      <p>{EMOTIONS[primaryEmotion.emotion].name}</p>
      <p>{EMOTIONS[secondaryEmotion.emotion].name}</p>
    </div>
  </Card>
);

export default OperatorCard;
