const { requiredField, emailRule, phoneRule, passwordRule } = require('../validation-rules');
const {
  firstName,
  lastName,
  email,
  phone,
  password,
  newPassword,
  confirmNewPassword,
  ssoUser,
  role,
  type
} = require('./inputs-texts');
const { defaultInputProperties, defaultTitleProperties } = require('../inputs-formats');

export const inputsUserDetails = [
  { ...defaultTitleProperties('Datos del usuario') },
  {
    ...defaultInputProperties(email),
    type: 'email',
    rules: [requiredField, emailRule],
    iconType: 'mail'
  },
  {
    ...defaultInputProperties(firstName),
    rules: [requiredField],
    iconType: 'user'
  },
  {
    ...defaultInputProperties(lastName),
    rules: [requiredField],
    iconType: 'user'
  },
  {
    ...defaultInputProperties(phone),
    type: 'phone',
    rules: [requiredField, phoneRule],
    iconType: 'phone'
  }
];

export const inputsSetUserPassword = [
  { ...defaultTitleProperties('Seleccione una contraseña') },
  {
    ...defaultInputProperties(newPassword),
    type: 'password',
    rules: [requiredField, passwordRule],
    iconType: 'lock',
    disabled: false,
    extra:
      'La contraseña debe tener como mínimo una letra en mayúscula (A-Z), como mínimo letras en mínuscula (a-z), debe tener como mínimo 1 número y una longitud de 8 caracteres.'
  },
  {
    ...defaultInputProperties(confirmNewPassword),
    type: 'password',
    rules: [requiredField, passwordRule],
    disabled: false,
    iconType: 'lock'
  }
];

export const inputsChangeUserPassword = [
  {
    ...defaultInputProperties(password),
    type: 'password',
    rules: [requiredField],
    className: 'ChangePassword',
    iconType: 'lock'
  },
  {
    ...defaultInputProperties(newPassword),
    type: 'password',
    rules: [requiredField, passwordRule],
    iconType: 'lock',
    className: 'ConfirmNewPassword',
    extra:
      'La contraseña debe tener como mínimo una letra en mayúscula (A-Z), como mínimo letras en mínuscula (a-z), debe tener como mínimo 1 número y una longitud de 8 caracteres.'
  },
  {
    ...defaultInputProperties(confirmNewPassword),
    type: 'password',
    rules: [requiredField, passwordRule],
    iconType: 'lock',
    className: 'ConfirmPassword'
  }
];

export const inputsEditUserPassword = [
  { ...defaultTitleProperties('Seleccione una contraseña') },
  {
    ...defaultInputProperties(newPassword),
    type: 'password',
    rules: [passwordRule],
    iconType: 'lock',
    extra:
      'La contraseña debe tener como mínimo una letra en mayúscula (A-Z), como mínimo letras en mínuscula (a-z), debe tener como mínimo 1 número y una longitud de 8 caracteres.'
  },
  {
    ...defaultInputProperties(confirmNewPassword),
    type: 'password',
    rules: [passwordRule],
    iconType: 'lock'
  }
];

export const inputSetUserRole = [
  { ...defaultTitleProperties('Role & Permisos') },
  {
    ...defaultInputProperties(role),
    component: 'Radio',
    initialValue: 'ROLE_ADMIN',
    buttonStyle: 'solid',
    size: 'large',
    radioButtons: [
      { value: 'ROLE_ADMIN', title: 'Admin' },
      { value: 'ROLE_SUPERVISOR', title: 'Supervisor' },
      { value: 'ROLE_OPERATOR', title: 'Operador' }
    ],
    rules: [requiredField]
  }
];
