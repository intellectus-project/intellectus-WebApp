import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import { isNowOlderThan } from '../../../utils/func-helpers';

const CustomDatePicker = ({ action, placeholder, theme }) => {
  const handleChange = (date, dateString) => action(dateString);
  const dateFormat = 'DD/MM/YYYY';
  const now = moment();
  return (
    <DatePicker
      onChange={handleChange}
      defaultValue={now}
      placeholder={placeholder}
      className={theme}
      format={dateFormat}
      disabledDate={date => isNowOlderThan(date)}
    />
  );
};

CustomDatePicker.propTypes = {
  action: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  theme: PropTypes.string
};

export default CustomDatePicker;
