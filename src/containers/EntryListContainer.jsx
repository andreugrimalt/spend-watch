import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isEmpty } from 'react-redux-firebase';

import Entry from '../components/Entry';

const uid = 'iwOrGZIswOfRWJQafOKS0w6heWi1';

const EntryListContainer = ({ entries }) => {
  if (isEmpty(entries) || isEmpty(entries.entries)) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  return Object.keys(entries.entries).map(key => (
    <Entry key={key} amount={parseFloat(entries.entries[key].amount, 10)} />
  ));
};
/* eslint-disable */
EntryListContainer.propTypes = {
  entries: PropTypes.object,
};

export default compose(
  firebaseConnect([`${uid}/entries`]),
  connect(state => ({
    entries: state.firebase.data[uid],
  })),
)(EntryListContainer);
