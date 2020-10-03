import emotionIcons from './emotion-icons.jsx';

export const EMOTION_NAMES = [
  'EMOTION_ANGER',
  'EMOTION_HAPPINESS',
  'EMOTION_NEUTRALITY',
  'EMOTION_SADNESS',
  'EMOTION_FEAR'
];

const EMOTIONS = {
  EMOTION_ANGER: {
    name: 'Enojo',
    icon: emotionIcons.angerIcon,
    color: '#d7202a',
    codeName: 'anger'
  },
  EMOTION_HAPPINESS: {
    name: 'Felicidad',
    icon: emotionIcons.happinessIcon,
    color: '#307c11',
    codeName: 'happiness'
  },
  EMOTION_NEUTRALITY: {
    name: 'Neutralidad',
    icon: emotionIcons.neutralityIcon,
    color: '#146494',
    codeName: 'neutrality'
  },
  EMOTION_SADNESS: {
    name: 'Tristeza',
    icon: emotionIcons.sadnessIcon,
    color: '#bfc119',
    codeName: 'sadness'
  },
  EMOTION_FEAR: {
    name: 'Miedo',
    icon: emotionIcons.fearIcon,
    color: '#5c0a4b',
    codeName: 'fear'
  }
};

export default EMOTIONS;
