const getOperators = () => () => [
  {
    id: 3,
    name: "Martin",
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
    name: "Agustina",
    lastName: "Martinez",
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
