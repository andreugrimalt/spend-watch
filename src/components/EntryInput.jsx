import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  background: palevioletred;
  border-radius: 3px;
`;

const EntryInput = props => (
  <div>
    <Input
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
