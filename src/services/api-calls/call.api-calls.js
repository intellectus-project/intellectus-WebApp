import helpers from './helpers';

const getCallById = makeGetRequest => id => makeGetRequest(`calls/${id}`);

const getOperatorCalls = makeGetRequest => (id, date) => makeGetRequest(`/calls/byOperator?date=${date}${id ? '&id=' + id : ''} `)

export default client => {
  const { makeGetRequest } = helpers(client);
  return {
    getCallById: getCallById(makeGetRequest),
    getOperatorCalls: getOperatorCalls(makeGetRequest),
  };
};
