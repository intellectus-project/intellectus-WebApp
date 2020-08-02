import helpers from './helpers';

const findAllZones = makeGetRequest => zoneId => makeGetRequest('/territory/zones', { zoneId });

export default client => {
  const { makeGetRequest } = helpers(client);
  return {
    findAllZones: findAllZones(makeGetRequest)
  };
};
