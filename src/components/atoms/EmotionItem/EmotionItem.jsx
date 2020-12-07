import React from 'react';
import EMOTIONS from '../../../utils/emotions';

const EmotionItem = ({ primaryEmotion, secondaryEmotion }) => {
  const primaryEmotionStyle = { marginRight: 20, textAlign: primaryEmotion? '' : 'center' };
  return (
    <div
      className="emotionsContainer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1.5em'
      }}
    >
      <br />
      <div className="primaryEmotion" style={primaryEmotionStyle}>
        {primaryEmotion ? EMOTIONS[primaryEmotion.emotion].icon() : EMOTIONS.EMOTION_DEFAULT.icon()}
        <strong>{primaryEmotion && ` ${Math.round(primaryEmotion.percentage * 100)}%`}</strong>
        <p>
          {primaryEmotion ? EMOTIONS[primaryEmotion.emotion].name : 'No se registraron llamadas'}
        </p>
      </div>
      <div className="secondaryEmotion">
        {secondaryEmotion && EMOTIONS[secondaryEmotion.emotion].icon()}
        <strong>{secondaryEmotion && ` ${Math.round(secondaryEmotion.percentage * 100)}%`}</strong>
        <p>{secondaryEmotion && EMOTIONS[secondaryEmotion.emotion].name}</p>
      </div>
    </div>
  );
};
export default EmotionItem;
