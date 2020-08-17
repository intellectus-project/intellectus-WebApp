import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import './_style.scss';
import { isNowOlderThan } from '../../../utils/func-helpers';

const CustomDatePicker = ({ changeFromDate, changeToDate }) => {
  const handleFromDateChange = (date, dateString) => changeFromDate(dateString);
  const handleToDateChange = (date, dateString) => changeToDate(dateString);
  const dateFormat = 'DD/MM/YYYY';
  const now = moment();
  // TODO: modularize more this component
  return (
    <>
      <DatePicker
        onChange={handleFromDateChange}
        defaultValue={now}
        placeholder="Desde"
        className="datePicker"
        format={dateFormat}
        disabledDate={date => isNowOlderThan(date)}
      />
      <DatePicker
        onChange={handleToDateChange}
        defaultValue={moment()}
        placeholder="Hasta"
        className="datePicker"
        format={dateFormat}
        disabledDate={date => isNowOlderThan(date)}
      />
    </>
  );
};

CustomDatePicker.propTypes = {
  changeFromDate: PropTypes.func.isRequired,
  changeToDate: PropTypes.func.isRequired
};

export default CustomDatePicker;
