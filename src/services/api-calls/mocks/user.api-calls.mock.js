const getOperators = () => () => [
  {
    id: 1,
    name: 'Fernanda',
    lastName: 'Perez',
    username: 'operator@intellectus.com',
    inCall: true,
    atBreak: true,
    callStartTime: null,
    primaryEmotion: {
      emotion: 'EMOTION_ANGER',
      percentage: 0.7
    },
    secondaryEmotion: {
      emotion: 'EMOTION_SADNESS',
      percentage: 0.3
    }
  },
  {
    id: 2,
    name: 'Lucas',
    lastName: 'Arnualdo',
    username: 'operator@intellectus.com',
    inCall: false,
    atBreak: true,
    callStartTime: null,
    primaryEmotion: {
      emotion: 'EMOTION_HAPPINESS',
      percentage: 0.5
    },
    secondaryEmotion: {
      emotion: 'EMOTION_NEUTRALITY',
      percentage: 0.3
    }
  },
  {
    id: 3,
    name: 'Eric',
    lastName: 'Hooka',
    username: 'operator@intellectus.com',
    inCall: true,
    atBreak: false,
    callStartTime: null,
    primaryEmotion: {
      emotion: 'EMOTION_ANGER',
      percentage: 0.6
    },
    secondaryEmotion: {
      emotion: 'EMOTION_FEAR',
      percentage: 0.3
    }
  },
  {
    id: 4,
    name: 'Ronan',
    lastName: 'Vazquez',
    username: 'operator@intellectus.com',
    inCall: true,
    atBreak: false,
    callStartTime: null,
    primaryEmotion: {
      emotion: 'EMOTION_FEAR',
      percentage: 0.9
    },
    secondaryEmotion: {
      emotion: 'EMOTION_SADNESS',
      percentage: 0.3
    }
  },
  {
    id: 5,
    name: 'Ronan',
    lastName: 'Vazquez',
    username: 'operator@intellectus.com',
    inCall: true,
    atBreak: false,
    callStartTime: null,
    primaryEmotion: {
      emotion: 'EMOTION_FEAR',
      percentage: 0.9
    },
    secondaryEmotion: {
      emotion: 'EMOTION_SADNESS',
      percentage: 0.3
    }
  }
];

const giveBreak = () => ({});

export default () => {
  return {
    getOperators,
    giveBreak
  };
};
