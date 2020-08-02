import helpers from './helpers';

const createUserRequest = makePostRequest => data => makePostRequest('users', data);

const findAll = makeGetRequest => () => makeGetRequest('users');

const findAllUser = makeGetRequest => searchCriteria => makeGetRequest('users/filters', { searchCriteria });

const findAllUsersPaginated = makeGetRequest => (searchCriteria, page, size, filters) => makeGetRequest('users/filters', { searchCriteria, page, size, ...filters });

const createUser = makePostRequest => data => {
  console.log('data ',data);
  makePostRequest('users', data);
}
const disableUser = makeGetRequest => id => makeGetRequest(`users/disable/${id}`);

const enableUser = makeGetRequest => id => makeGetRequest(`users/enable/${id}`);

const getUserById = makeGetRequest => id => makeGetRequest(`users/${id}`);

const updateUserById = makePatchRequest => (id, data) => makePatchRequest(`users/${id}`, data);

const findAllRoles = makeGetRequest => () => makeGetRequest('roles');

export default client => {
  const { makePostRequest, makeGetRequest, makePatchRequest } = helpers(client);
  return {
    findAll: findAll(makeGetRequest),
    createUserRequest: createUserRequest(makePostRequest),
    findAllUser: findAllUser(makeGetRequest),
    findAllUsersPaginated: findAllUsersPaginated(makeGetRequest),
    createUser: createUser(makePostRequest),
    disableUser: disableUser(makeGetRequest),
    enableUser: enableUser(makeGetRequest),
    getUserById: getUserById(makeGetRequest),
    updateUserById: updateUserById(makePatchRequest),
    findAllRoles: findAllRoles(makeGetRequest)
  };
};
