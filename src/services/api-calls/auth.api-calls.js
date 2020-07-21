import helpers from './helpers';

const loginRequest = makePostRequest => data => makePostRequest('api/auth/login', data);

export default client => {
  const { makePostRequest } = helpers(client);
  return {
    loginRequest: loginRequest(makePostRequest)
  };
};
