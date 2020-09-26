import moment from 'moment';
import 'moment-timezone';
import { format } from 'prettier';

export const dateFormat = 'DD/MM/YYYY';
const dateTimeFormat = 'DD/MM/YYYY HH:mm';
const apiFormat = 'YYYY-MM-DD';

export const scrollWindowToTop = ({ smooth }) =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth ? 'smooth' : undefined
  });

export const addIndexKeyToArray = array => {
  const mappedArray = array;
  let id = 0;
  mappedArray.forEach(item => {
    item.key = id;
    id++;
  });
  return mappedArray;
};

export const compare = (element1, element2, key) => {
  if (!element1[key] && element1[key] !== 0) return 1;
  if (!element2[key] && element2[key] !== 0) return -1;
  return JSON.stringify(element1[key]).localeCompare(JSON.stringify(element2[key]));
};

const getUrlVars = () => {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
};

export const getUrlParam = (parameter, defaultvalue) => {
  var urlparameter = defaultvalue;
  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
};

export const parseToFilterDropDown = (entries, key, title, childs = null) => {
  return entries.map(function(entry) {
    let data = { key: entry[key], title: entry[title] };
    if (childs && entry.hasOwnProperty(childs.data) && entry[childs.data].length > 0) {
      data['childs'] = entry[childs.data].map(child => ({
        key: childs.data + '-' + child[childs.key],
        title: child[childs.title]
      }));
    }
    return data;
  });
};

export const differenceBetween = (date1 , date2) => {
  return moment(date1).diff(date2, 'minutes');
}

export const numberFormat = (value, number) => {
  return value.toFixed(number);
};

export const getExtensionFromUrl = url => {
  return url
    .split('.')
    .pop()
    .split(/\#|\?/)[0];
};

export const getNameFromUrl = url => {
  return url.substring(url.lastIndexOf('/') + 1).split(/\#|\?/)[0];
};

export const formatDate = date => moment(date, 'YYYY-MM-DD').format(dateFormat);
export const formatDateWithTime = date => moment(date, 'YYYY-MM-DDTHH:mm').format(dateTimeFormat);

export const isNowOlderThan = date => moment() < moment(date, dateFormat);

export const formatCall = call => {
  const formattedCall = {};
  formattedCall.shift = call.shift.name;
  formattedCall.operator = call.operator.name;
  formattedCall.weather = call.weather && call.weather.description;
  formattedCall.startTime = formatDateWithTime(call.startTime);
  const diff = moment(call.endTime).diff(moment(call.startTime), 'seconds');
  const minutes = Math.round(diff / 60);
  const seconds = Math.round(diff % 60);
  formattedCall.duration = `${minutes} minutos ${seconds} segundos`;
  return { ...call, ...formattedCall };
};

export const isValidDate = date => moment(date, dateFormat).isValid();

export const dateHandler = {
  tomorrow: date =>
    moment(date, dateFormat)
      .add(1, 'days')
      .format(dateFormat),
  sumDays: (date, amount) =>
    moment(date, dateFormat)
      .add(amount, 'days')
      .format(dateFormat),
  format: date => moment(date, dateFormat),
  formatForApi: date => date.format(apiFormat)
};
