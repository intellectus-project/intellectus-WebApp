import { get } from "lodash";
import {
  UNEXPECTED_ERROR,
  API_ERROR_401,
  API_ERROR_403,
  API_ERROR_500,
  STATUS_401,
  STATUS_403,
  STATUS_500,
} from "./messages.constants.json";

export const createQueryString = (query) =>
  Object.keys(query)
    .map((key) => `${key}=${query[key] || ""}`)
    .join("&");

const addQueryString = (url, query) => {
  const queryStringParameters = createQueryString(query || {});
  return query ? `${url}?${queryStringParameters}` : url;
};

const makeGetRequest = (httpClient) => (url, parameters, queryParameters) => {
  const completeUrl = addQueryString(url, queryParameters);
  return httpClient
    .get(completeUrl, {
      params: parameters,
    })
    .then((response) => response.data);
};

const makeDownloadRequest = (httpClient) => (
  url,
  parameters,
  queryParameters
) => {
  const completeUrl = addQueryString(url, queryParameters);
  return httpClient.get(completeUrl, {
    params: parameters,
  });
};

const makePostRequest = (httpClient) => (
  url,
  bodyParameters = {},
  queryParameters
) => {
  const completeUrl = addQueryString(url, queryParameters);
  return httpClient.post(completeUrl, { ...bodyParameters });
};

const makePostFileRequest = (httpClient) => (url, file, queryParameters) => {
  const completeUrl = addQueryString(url, queryParameters);
  return httpClient.post(completeUrl, file);
};

const makePatchRequest = (httpClient) => (
  url,
  bodyParameters = {},
  queryParameters
) => {
  const completeUrl = addQueryString(url, queryParameters);
  return httpClient.patch(completeUrl, bodyParameters);
};

const makeDeleteRequest = (httpClient) => (url, queryParameters) => {
  const completeUrl = addQueryString(url, queryParameters);
  return httpClient.delete(completeUrl).then((response) => response.data);
};

export default (client) => ({
  makeDownloadRequest: makeDownloadRequest(client),
  makeGetRequest: makeGetRequest(client),
  makePostRequest: makePostRequest(client),
  makePatchRequest: makePatchRequest(client),
  makePostFileRequest: makePostFileRequest(client),
  makeDeleteRequest: makeDeleteRequest(client),
});

export const processedErrorMessage = (error, messageText) => {
  const status = get(error, "response.status");
  if (!status) return UNEXPECTED_ERROR;
  switch (status) {
    case STATUS_401:
      return API_ERROR_401;
    case STATUS_403:
      return API_ERROR_403;
    case STATUS_500:
      return API_ERROR_500;
    default:
      return messageText || UNEXPECTED_ERROR;
  }
};
