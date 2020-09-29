import React from 'react';
import './_style.scss';
import { Card, Avatar, Icon } from 'antd';
import EMOTIONS from '../../../utils/emotions';

const OperatorCard = ({ name, lastName, primaryEmotion, secondaryEmotion }) => {
  return (
    <Card bordered={false} style={{ marginTop: 10 }}>
      <Card.Meta
        avatar={<Avatar src="img/avatarBlack.png" />}
        title={
          <>
            <button onClick={() => alert('hi')}>
              {`${name} ${lastName} `}
              <Icon type="select" style={{ marginLeft: '0.5em', color: '#08c' }} />
            </button>
          </>
        }
      />
      <div>
        <br />
        <div className="primaryEmotion">
        {EMOTIONS[primaryEmotion.emotion].icon()}
        <span id="percentage">{` ${Math.round(primaryEmotion.percentage * 100)}%`}</span>
        <p>{EMOTIONS[primaryEmotion.emotion].name}</p>
        </div>
        <div className="secondaryEmotion">
        {EMOTIONS[secondaryEmotion.emotion].icon()}
        <span id="percentage">{` ${Math.round(primaryEmotion.percentage * 100)}%`}</span>
        <p>{EMOTIONS[secondaryEmotion.emotion].name}</p>
        </div>
      </div>
    </Card>
  );
};

export default OperatorCard;
