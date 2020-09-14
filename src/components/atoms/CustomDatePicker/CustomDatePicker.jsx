import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import { isNowOlderThan } from '../../../utils/func-helpers';

const now = moment();

const CustomDatePicker = ({ action, placeholder, theme, defaultDate }) => {
  const handleChange = (date, dateString) => action(dateString);
  const dateFormat = 'DD/MM/YYYY';
  return (
    <DatePicker
      onChange={handleChange}
      defaultValue={defaultDate}
      placeholder={placeholder}
      className={theme}
      format={dateFormat}
      disabledDate={date => isNowOlderThan(date)}
    />
  );
};

CustomDatePicker.propTypes = {
  action: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  theme: PropTypes.string,
  defaultDate : PropTypes.object
};

CustomDatePicker.defaultProps={
 placeholder: "Fecha",
 defaultValue: now
};

export default CustomDatePicker;
