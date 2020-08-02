import client from './http-client';
import auth from './auth.api-calls';
import user from './user.api-calls';

const defaultClient = client({});

export default () =>
  process.env.REACT_APP_CUSTOM_ENV === 'mocked'
    ? {

    }
    : {
      ...auth(defaultClient),
      ...user(defaultClient)
    };


