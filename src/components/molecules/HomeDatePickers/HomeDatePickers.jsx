import React from 'react';
import PropTypes from 'prop-types';
import CustomDatePicker from '../../atoms/CustomDatePicker/CustomDatePicker';
import './_style.scss';

const HomeDatePickers = ({ changeFromDate, changeToDate }) => (
  <>
    <CustomDatePicker action={changeFromDate} placeholder="Desde" theme="datePicker" />
    <CustomDatePicker action={changeToDate} placeholder="Hasta" theme="datePicker" />
  </>
);

HomeDatePickers.propTypes = {
  changeFromDate: PropTypes.func.isRequired,
  changeToDate: PropTypes.func.isRequired
};

export default HomeDatePickers;
