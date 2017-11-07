import React from 'react';
import PropTypes from 'prop-types';

const EntryInput = props => (
  <div>
    <input
      type="text"
      placeholder="£"
      onChange={props.updateInputValue}
    />
    <button onClick={props.add}>Add</button>
  </div>
);

/* eslint-disable */
EntryInput.propTypes = {
  add: PropTypes.any,
  updateInputValue: PropTypes.any,
}

export default EntryInput;
