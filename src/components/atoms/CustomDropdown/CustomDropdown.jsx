import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const CustomDropdown = ({ placeholder, content, action, style }) => {
  return (
    <>
      <Select placeholder={placeholder} style={style} onChange={action} allowClear>
        {content.map(c => (
          <Select.Option key={c.id}>{`${c.name} ${c.lastName}`}</Select.Option>
        ))}
      </Select>
    </>
  );
};

CustomDropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  content: PropTypes.array,
  action: PropTypes.func.isRequired,
  style: PropTypes.object
};

CustomDropdown.defaultProps = {
  style: { width: 150 }
};

export default CustomDropdown;
