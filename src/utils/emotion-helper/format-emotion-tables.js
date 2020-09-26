export const formatEmotionTables = (emotionTables) => {
  let obj = {}
  console.log(Object.keys(emotionTables))
  Object.keys(emotionTables).map(k => obj[`EMOTION_${k.toUpperCase()}`] = emotionTables[k])
  console.log(obj)
  return obj;
}