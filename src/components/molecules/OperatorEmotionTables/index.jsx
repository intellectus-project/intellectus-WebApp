import React from 'react';
import LineChartEmotion from '../../atoms/LineChartEmotion/LineChartEmotion';
import Emotions from '../../../utils/emotions';

const graphs = (emotionTables) => {
  return (
    <div>
      <div class='ant-row'>
        <div class='ant-col-8'>
          <LineChartEmotion values={{EMOTION_ANGER: emotionTables.EMOTION_ANGER}} />
        </div>
        <div class='ant-col-8'>
          <LineChartEmotion values={{EMOTION_HAPPINESS: emotionTables.EMOTION_HAPPINESS}} />
        </div>
        <div class='ant-col-8'>
          <LineChartEmotion values={{EMOTION_FEAR: emotionTables.EMOTION_FEAR}} />
        </div>
      </div>
      <div class='ant-row'>
        <div class='ant-col-8 ant-col-offset-4'>
          <LineChartEmotion values={{EMOTION_SADNESS: emotionTables.EMOTION_SADNESS}} />
        </div>
        <div class='ant-col-8'>
          <LineChartEmotion values={{EMOTION_NEUTRALITY: emotionTables.EMOTION_NEUTRALITY}}/>
        </div>
      </div>
    </div>
  )
}

const allInOne = (emotionTables) => {
  return (
    <div class='ant-row'>
      <div class='ant-col-8 ant-col-offset-7'>
        <LineChartEmotion values={emotionTables} /> 
      </div>
    </div>
  );
}

const OperatorEmotionTables = ({ emotionTables, switchOn }) => {
  return (
    switchOn ? graphs(emotionTables) : allInOne(emotionTables)
  )
};

export default OperatorEmotionTables;
