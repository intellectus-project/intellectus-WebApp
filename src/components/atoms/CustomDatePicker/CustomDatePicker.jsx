import React from 'react';
import { DatePicker } from "antd";
import PropTypes from "prop-types";
import "./_style.scss";

const CustomDatePicker = ({ actionTo, actionFrom }) => (
  <>
    <DatePicker
      onChange={actionTo}
      placeholder="Desde"
      className="datePicker"
    />
    <DatePicker
      onChange={actionFrom}
      placeholder="Hasta"
      className="datePicker"
    />
  </>
);

CustomDatePicker.propTypes = {
  actionTo: PropTypes.func.isRequired,
  actionFrom: PropTypes.func.isRequired,
};

export default CustomDatePicker;
