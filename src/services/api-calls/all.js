import client from './http-client';
import auth from './auth.api-calls';
import user from './user.api-calls';
import reports from './reports.api-calls';
import calls from './call.api-calls'
import authMock from './mocks/auth.api-calls.mock';
import userMock from './mocks/user.api-calls.mock';
import reportsMock from './mocks/reports.api-calls.mock';
import callsMock from './mocks/calls.api-calls.mock';

const defaultClient = client({});

export default () =>
  process.env.REACT_APP_CUSTOM_ENV === 'mocked'
    ? {
        ...authMock(defaultClient),
        ...userMock(defaultClient),
        ...reportsMock(defaultClient),
        ...callsMock(defaultClient)
      }
    : {
        ...auth(defaultClient),
        ...user(defaultClient),
        ...reports(defaultClient),
        ...calls(defaultClient)
      };
