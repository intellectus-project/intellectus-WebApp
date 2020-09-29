export const formatEmotionTables = (emotionTables) => {
  let obj = {}
  Object.keys(emotionTables).map(k => obj[`EMOTION_${k.toUpperCase()}`] = emotionTables[k])
  return obj;
}