import React from 'react';
import EMOTIONS from '../../../utils/emotions';

const EmotionItem = ({ primaryEmotion, secondaryEmotion }) => (
  <div
    className="emotionsContainer"
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.5em' }}
  >
    <br />
    <div className="primaryEmotion" style={{ marginRight: 20 }}>
      {EMOTIONS[primaryEmotion.emotion].icon()}
      <strong>{` ${Math.round(primaryEmotion.percentage * 100)}%`}</strong>
      <p>{EMOTIONS[primaryEmotion.emotion].name}</p>
    </div>
    <div className="secondaryEmotion">
      {EMOTIONS[secondaryEmotion.emotion].icon()}
      <strong>{` ${Math.round(secondaryEmotion.percentage * 100)}%`}</strong>
      <p>{EMOTIONS[secondaryEmotion.emotion].name}</p>
    </div>
  </div>
);

export default EmotionItem;
