import { message } from 'antd';

export const ApiErrorMessage = msg =>
  message.error(msg || 'Hubo un error, por favor contacte con el administrador');


export const SuccessMessage = text => message.success(text);
