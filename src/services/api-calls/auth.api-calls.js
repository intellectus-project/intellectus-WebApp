import helpers from './helpers';

const loginRequest = makePostRequest => data => makePostRequest('api/auth/login', data);
const logoutRequest = makeGetRequest => data => makeGetRequest('api/auth/logout', data);

export default client => {
  const { makePostRequest, makeGetRequest } = helpers(client);
  return {
    loginRequest: loginRequest(makePostRequest),
    logoutRequest: logoutRequest(makeGetRequest)
  };
};
