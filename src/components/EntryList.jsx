import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';

const EntryList = props => (
  <ul>
    {Object.keys(props.entries).map(key => (
      <Entry
        key={key}
        amount={parseFloat(props.entries[key].amount, 10)}
        place={props.entries[key].place}
      />
    ))}
  </ul>
);

/* eslint-disable */
EntryList.propTypes = {
  entries: PropTypes.object,
};

const Loading = () =>
  <div>Loading...</div>

export default EntryList;

export { Loading };