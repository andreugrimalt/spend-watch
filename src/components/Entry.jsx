import React from 'react';
import PropTypes from 'prop-types';

const Entry = props => (
  <li>{props.amount}</li>
);

Entry.propTypes = {
  amount: PropTypes.number,
};

Entry.defaultProps = {
  amount: 0,
};

export default Entry;
