import helpers from './helpers';

const getCallById = makeGetRequest => id => makeGetRequest(`calls/${id}`);

export default client => {
  const { makeGetRequest } = helpers(client);
  return {
    getCallById: getCallById(makeGetRequest)
  };
};
