const { requiredField } = require('../validation-rules');
const { email, password } = require('./inputs-texts');
const { defaultInputProperties } = require('../inputs-formats');

export const loginInputs = [
  {
    ...defaultInputProperties(email),
    type: 'email',
    rules: [requiredField],
    iconType: 'mail'
  },
  {
    ...defaultInputProperties(password),
    type: 'password',
    rules: [requiredField],
    iconType: 'lock'
  }
];
