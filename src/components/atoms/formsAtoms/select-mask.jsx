import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export const SelectMask = ({ form, options, defaultValue }) => {
  const { getFieldDecorator } = form;

  return options
    ? getFieldDecorator('prefix', {
        initialValue: defaultValue
      })(
        <Select style={{ width: 70 }}>
          {options.map(option => (
            <Option key={option.key} value={option.key}>
              {option.value}
            </Option>
          ))}
        </Select>
      )
    : undefined;
};
