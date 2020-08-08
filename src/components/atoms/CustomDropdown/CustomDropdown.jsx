import React from "react";
import { Select } from "antd";
import PropTypes from "prop-types";

const CustomDropdown = ({ placeholder, content, action, style }) => {
  // TODO: parse content to Select.Option
  return (
    <Select placeholder={placeholder} style={style} onChange={action}>
      {content}
    </Select>
  );
};

CustomDropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
  style: PropTypes.object,
};

CustomDropdown.defaultProps = {
  style: { width: 120 },
};

export default CustomDropdown;
