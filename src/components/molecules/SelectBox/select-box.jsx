import React, { useState } from 'react';
import './_style.scss';
import { Menu, Dropdown, Button } from 'antd';
import PropTypes from 'prop-types';

const SelectBox = ({ inputs, onChange }) => {
  const [text, setText] = useState('Seleccionar');

  const handleClick = event => {
    console.log(event);
    const pickedValue = inputs.reduce((r, x) => (x.id === Number(event.key) ? x : r), null);
    console.log(pickedValue);
    setText(pickedValue.name);
    onChange(pickedValue);
  };

  const menu = (
    <Menu onClick={handleClick}>
      {inputs && inputs.map(input => <Menu.Item key={input.id}>{input.name}</Menu.Item>)}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        {text} 
      </Button>
    </Dropdown>
  );
};

SelectBox.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string }))
    .isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectBox;
