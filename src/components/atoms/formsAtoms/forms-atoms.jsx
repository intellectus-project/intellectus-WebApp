import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';
import { Radio } from 'antd';

export const RadioField = ({ radioButtons, ...rest }) => {
  const buttons = radioButtons.map((button, index) => (
    <Radio.Button key={index} value={button.value}>
      {button.title}
    </Radio.Button>
  ));
  return <Radio.Group {...rest}>{buttons}</Radio.Group>;
};

RadioField.propTypes = {
  buttonStyle: PropTypes.string,
  initialValue: PropTypes.any.isRequired,
  radioButtons: PropTypes.arrayOf.isRequired,
  size: PropTypes.string
};
