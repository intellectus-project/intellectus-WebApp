import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import { isNowOlderThan, dateFormat } from '../../../utils/func-helpers';

const now = moment();

const CustomDatePicker = ({ action, placeholder, theme, dateValue, allowClear }) => {

  const handleChange = (date, dateString) => {
    action(dateString);
  };
  return (
    <DatePicker
      onChange={handleChange}
      defaultValue={dateValue}
      placeholder={placeholder}
      className={theme}
      format={dateFormat}
      disabledDate={date => isNowOlderThan(date)}
      allowClear={allowClear}
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
  dateValue: now,
  allowClear: true
};

export default CustomDatePicker;
