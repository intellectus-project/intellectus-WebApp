import React from "react";
import { DatePicker } from "antd";
import PropTypes from "prop-types";
import "./_style.scss";

const CustomDatePicker = ({ changeFromDate, changeToDate }) => {
  const handleFromDateChange = (date, dateString) => changeFromDate(dateString);
  const handleToDateChange = (date, dateString) => changeToDate(dateString);

  return (
    <>
      <DatePicker
        onChange={handleFromDateChange}
        placeholder="Desde"
        className="datePicker"
      />
      <DatePicker
        onChange={handleToDateChange}
        placeholder="Hasta"
        className="datePicker"
      />
    </>
  );
};

CustomDatePicker.propTypes = {
  changeFromDate: PropTypes.func.isRequired,
  changeToDate: PropTypes.func.isRequired,
};

export default CustomDatePicker;
