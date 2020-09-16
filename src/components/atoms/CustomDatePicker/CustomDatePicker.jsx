import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import { isNowOlderThan } from '../../../utils/func-helpers';

const now = moment();

const CustomDatePicker = ({ action, placeholder, theme, dateValue }) => {
  const handleChange = (date, dateString) => action(dateString);
  const dateFormat = 'DD/MM/YYYY';
  return (
    <DatePicker
      onChange={handleChange}
      value={dateValue}
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
  dateValue: PropTypes.object
};

CustomDatePicker.defaultProps = {
  placeholder: 'Fecha',
  dateValue: now
};

export default CustomDatePicker;
