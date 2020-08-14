import helpers from "./helpers";

const getRingChartValues = (makeGetRequest) => (query) =>
  makeGetRequest("/reports/ringsChart", query);

export default (client) => {
  const { makeGetRequest } = helpers(client);
  return {
    getRingChartValues: getRingChartValues(makeGetRequest),
  };
};
