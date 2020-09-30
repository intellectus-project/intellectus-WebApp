import { message } from 'antd';

export const ApiErrorMessage = () =>
  message.error('Hubo un error, por favor contacte con el administrador');

export const SuccessMessage = text => message.success(text);
