import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './_style.scss';

const { Search } = Input;

const SearchBar = ({ setSearchCriteria }) => (
  <div className="SearchBar">
    <Search
      placeholder="Buscar usuario"
      onChange={event => setSearchCriteria(event.target.value)}
      onSearch={setSearchCriteria}
      style={{ width: 300 }}
    />
  </div>
);

SearchBar.propTypes = {
  setSearchCriteria: PropTypes.func.isRequired
};

export default SearchBar;
