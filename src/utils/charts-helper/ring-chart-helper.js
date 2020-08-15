const fear = {
  key: 'fear',
  text: 'Miedo',
  id: 'fear',
  theme: {
    from: '#6b0455',
    to: '#3a022e',
    track: '#8b7086',
  },
  position: {
    offsetX: -43,
    offsetY: -25,
  },
};
const anguish = {
  key: 'sadness',
  text: 'Angustia',
  id: 'sadness',
  theme: {
    from: '#eaec17',
    to: '#a8a90f',
    track: '#dde599',
  },
  position: {
    offsetX: 25,
    offsetY: 0,
  },
};
const happiness = {
  key: 'happiness',
  text: 'Felicidad',
  id: 'happiness',
  theme: { from: '#43db06', to: '#31900b', track: '#9ce599' },
  position: {
    offsetX: -25,
    offsetY: 0,
  },
};
const anger = {
  key: 'anger',
  text: 'Enojo',
  id: 'anger',
  theme: {
    from: '#ee4217',
    to: '#b0300f',
    track: '#e599a1',
  },
  position: {
    offsetX: 43,
    offsetY: -25,
  },
};
const neutrality = {
  key: 'neutrality',
  text: 'Neutralidad',
  id: 'neutrality',
  theme: {
    from: '#0f87d0',
    to: '#0e5683',
    track: '#99c8e5',
  },
  position: { offsetX: 0, offsetY: -25 },
};

export const upTermRings = [anguish, happiness];
export const downTermRings = [anger, neutrality, fear];
