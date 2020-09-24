import helpers from './helpers';

const getCallById = makeGetRequest => () => makeGetRequest('calls/5');

export default client => {
  const { makeGetRequest } = helpers(client);
  return {
    getCallById: getCallById(makeGetRequest)
  };
};
