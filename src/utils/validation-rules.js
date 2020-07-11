const { password, email, phone } = require('./validation-regular-exp');
const { REQUIRED_FIELD, PASSWORD, EMAIL, PHONE, MAX_LENGTH } = require('./validation-messages');

module.exports = {
  requiredField: { required: true, message: REQUIRED_FIELD },
  passwordRule: { pattern: password, message: PASSWORD, type: 'string' },
  emailRule: { pattern: email, message: EMAIL, type: 'string' },
  phoneRule: { pattern: phone, message: PHONE },
  maxRule: (number) => ({ max: number, message: MAX_LENGTH(number) })
};
