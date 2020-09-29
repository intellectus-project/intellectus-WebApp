const getCallById = () => ({
    "operatorStats": {
      "sadness": 0.09,
      "happiness": 0.25,
      "fear": 0.28,
      "neutrality": 0.19,
      "anger": 0.19
    },
    "consultantStats": {
      "sadness": 0.35,
      "happiness": 0.0,
      "fear": 0.36,
      "neutrality": 0.0,
      "anger": 0.29
    },
    "emotion": "EMOTION_NEUTRALITY",
    "startTime": "2020-09-17T18:00:15.073706",
    "endTime": "2020-09-17T17:31:15.073706",
    "weather": {
      "id": 48,
      "description": "Algo de nubes",
      "temperature": 20.833333333333332,
      "time": "2020-09-17T18:00:00",
      "roundedTemperature": 21.0
    },
    "shift": {
      "id": 2,
      "name": "Tarde",
      "startHour": 8,
      "endHour": 16
    },
    "operator": {
      "id": 7,
      "name": "Ronan"
    },
    "breakTaken": true,
    "breakDurationMinutes": 10
  })



export default () => ({
    getCallById
  });