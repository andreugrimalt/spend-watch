import React from 'react';
import PropTypes from 'prop-types';

const Entry = props => (
  <li>
    <div>{props.place}</div>
    <div>{props.amount}</div>
  </li>
);

Entry.propTypes = {
  amount: PropTypes.number,
  place: PropTypes.string,
};

Entry.defaultProps = {
  amount: 0,
  place: '',
};

export default Entry;
