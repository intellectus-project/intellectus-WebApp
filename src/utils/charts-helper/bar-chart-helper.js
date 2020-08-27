const getEmotionValue = (emotion, data) => data.map(d => Math.round(d.stats[emotion] * 100));

export const getEmotionValues = data => {
  const sadnessValues = getEmotionValue('sadness', data);
  const happinessValues = getEmotionValue('happiness', data);
  const fearValues = getEmotionValue('fear', data);
  const neutralityValues = getEmotionValue('neutrality', data);
  const angerValues = getEmotionValue('anger', data);

  return { sadnessValues, happinessValues, fearValues, neutralityValues, angerValues };
};
