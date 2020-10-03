import helpers from './helpers';

const getRingChartValues = makeGetRequest => query => makeGetRequest('/reports/ringsChart', query);

const getBarChartValues = makeGetRequest => query => makeGetRequest('/reports/barsChart', query);

const getNewEvents = makeGetRequest => query => makeGetRequest('/newsEvents', query);

const getCalls = makeGetRequest => query => makeGetRequest('/calls', query);

const getWeathersDay = makeGetRequest => query => makeGetRequest('/weathers', query);

const getBarChartByOperators = makeGetRequest => query => makeGetRequest('/reports/barsChartByOperators');

export default client => {
  const { makeGetRequest } = helpers(client);
  return {
    getRingChartValues: getRingChartValues(makeGetRequest),
    getBarChartValues: getBarChartValues(makeGetRequest),
    getNewEvents: getNewEvents(makeGetRequest),
    getCalls: getCalls(makeGetRequest),
    getWeathersDay: getWeathersDay(makeGetRequest),
    getBarChartByOperators: getBarChartByOperators(makeGetRequest),
  };
};
