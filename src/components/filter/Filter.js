import React from 'react';
import PropTypes from 'prop-types';
import { filter_input, contact_search } from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={contact_search}>
    Find contact by name
    <input
      className={filter_input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
