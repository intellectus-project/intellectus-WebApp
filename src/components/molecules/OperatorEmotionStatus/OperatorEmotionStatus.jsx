import React from 'react';
import EMOTIONS, { EMOTION_NAMES } from '../../../utils/emotions'

const mapEmotions = (emotionStatus) => {
  return(
    EMOTION_NAMES.map(e => 
      <div class='ant-col-2'>
        {EMOTIONS[e].icon()}
        <span id="percentage">{` ${Math.round(emotionStatus[e] * 100)}%`}</span>
        <p>{EMOTIONS[e].name}</p>
      </div>
    )
  )
}

const OperatorEmotionStatus = ({ emotionStatus }) => {
  return ( 
    mapEmotions(emotionStatus)
  )
};

export default OperatorEmotionStatus;
