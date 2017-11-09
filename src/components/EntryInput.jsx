import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
align-items: center;
background: #EEEEEE;
padding: 0 16px 0 16px;
min-height: 36px;
`;

const Input = styled.input`
  flex-grow: 2;
  border-radius: 26px;
  background: white;
  padding: 8px 0 8px 8px;
  height: 26px;
`;

const MaterialIcons = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: flex;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';

  flex-grow: 1;
  justify-content: flex-end;
`;

const EntryInput = props => (
  <Div>
    <Input
      type="text"
      placeholder="£"
      onChange={props.updateInputValue}
      value={props.value}
    />

    <MaterialIcons onClick={props.add}>send</MaterialIcons>
  </Div>
);

/* eslint-disable */
EntryInput.propTypes = {
  add: PropTypes.any,
  updateInputValue: PropTypes.any,
  value: PropTypes.any,
}

export default EntryInput;
