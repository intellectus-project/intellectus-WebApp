import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const CustomDropdown = ({ placeholder, content, action, style, label }) => {
  return (
    <>
      <div>
        <div className="label">
          <strong>{label}</strong>
        </div>
        <div>
          <Select placeholder={placeholder} style={style} onChange={action} allowClear>
            {content.map(c => (
              <Select.Option key={c.id}>{`${c.name} ${c.lastName ? c.lastName : ''}` }</Select.Option>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

CustomDropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  content: PropTypes.array,
  action: PropTypes.func.isRequired,
  style: PropTypes.object,
  label: PropTypes.string
};

CustomDropdown.defaultProps = {
  style: { width: 150 }
};

export default CustomDropdown;
