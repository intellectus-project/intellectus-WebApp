import helpers from './helpers';

const getRingChartValues = makeGetRequest => query => makeGetRequest('/reports/ringsChart', query);

const getNewEvents = makeGetRequest => query => makeGetRequest('/newsEvents', query);

export default client => {
  const { makeGetRequest } = helpers(client);
  return {
    getRingChartValues: getRingChartValues(makeGetRequest),
    getNewEvents: getNewEvents(makeGetRequest)
  };
};
