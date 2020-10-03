import helpers from './helpers';

const createUserRequest = makePostRequest => data => makePostRequest('users', data);

const findAll = makeGetRequest => () => makeGetRequest('users');

const findAllUser = makeGetRequest => searchCriteria =>
  makeGetRequest('users/filters', { searchCriteria });

const findAllUsersPaginated = makeGetRequest => (searchCriteria, page, size, filters) =>
  makeGetRequest('users/filters', { searchCriteria, page, size, ...filters });

const createUser = makePostRequest => data => makePostRequest('users', data);

const disableUser = makeGetRequest => id => makeGetRequest(`users/disable/${id}`);

const enableUser = makeGetRequest => id => makeGetRequest(`users/enable/${id}`);

const getUserById = makeGetRequest => id => makeGetRequest(`users/${id}`);

const updateUserById = makePatchRequest => (id, data) => makePatchRequest(`users/${id}`, data);

const findAllRoles = makeGetRequest => () => makeGetRequest('roles');

const getOperators = makeGetRequest => () => makeGetRequest('/users/operators');

const giveBreak = makePostRequest => operatorId =>
  makePostRequest('/breaks/createBySupervisor', operatorId);

const getSupervisors = makeGetRequest => () => makeGetRequest('/users/supervisors');

const getShifts = makeGetRequest => () => makeGetRequest('/shifts');

const getOperatorEmotionStatus = makeGetRequest => id => makeGetRequest(`/users/operatorEmotionStatus?${id ? 'operatorId=' + id : ''}`)

const getOperatorEmotionTables = makeGetRequest => (id, date) => makeGetRequest(`/users/operatorEmotionTables?date=${date}${id ? '&operatorId=' + id : ''} `)


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
    findAllRoles: findAllRoles(makeGetRequest),
    getOperators: getOperators(makeGetRequest),
    getSupervisors: getSupervisors(makeGetRequest),
    getShifts: getShifts(makeGetRequest),
    giveBreak: giveBreak(makePostRequest),
    getOperatorEmotionStatus: getOperatorEmotionStatus(makeGetRequest),
    getOperatorEmotionTables: getOperatorEmotionTables(makeGetRequest),
  };
};
