const getOperators = () => () => [
  {
    id: 3,
    name: "Fernanda",
    lastName: "Perez",
    username: 'operator@intellectus.com',
    inCall: false,
    callStartTime: null,
    primaryEmotion: {
      emotion: 'EMOTION_ANGER',
      percentage: 11.0
    },
    secondaryEmotion: {
      emotion: 'EMOTION_SADNESS',
      percentage: 0.3
    }
  },
  {
    id: 4,
    name: "Lucas",
    lastName: "Arnualdo",
    username: 'operator@intellectus.com',
    inCall: false,
    callStartTime: null,
    primaryEmotion: {
      emotion: 'EMOTION_ANGER',
      percentage: 11.0
    },
    secondaryEmotion: {
      emotion: 'EMOTION_SADNESS',
      percentage: 0.3
    }
  },{
    id: 4,
    name: "Eric",
    lastName: "Hooka",
    username: 'operator@intellectus.com',
    inCall: false,
    callStartTime: null,
    primaryEmotion: {
      emotion: 'EMOTION_ANGER',
      percentage: 11.0
    },
    secondaryEmotion: {
      emotion: 'EMOTION_SADNESS',
      percentage: 0.3
    }
  },{
    id: 4,
    name: "Ronan",
    lastName: "Vazquez",
    username: 'operator@intellectus.com',
    inCall: false,
    callStartTime: null,
    primaryEmotion: {
      emotion: 'EMOTION_ANGER',
      percentage: 11.0
    },
    secondaryEmotion: {
      emotion: 'EMOTION_SADNESS',
      percentage: 0.3
    }
  }
];

export default () => {
  return {
    getOperators
  };
};
