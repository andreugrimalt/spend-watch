import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isEmpty } from 'react-redux-firebase';
import crypto from 'crypto';

import EntryList, { Loading } from '../components/EntryList';

const uid = 'iwOrGZIswOfRWJQafOKS0w6heWi1';


const getDateSet = entries => {
  const dates = {};
  Object.keys(entries).forEach(key => {
    const dateString = new Date(entries[key].time).toLocaleString('en-gb', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    });

    const hash = crypto.createHash('md5').update(dateString).digest('hex');

    if (dates[hash] && Array.isArray(dates[hash].values)) {
      dates[hash].values.push(entries[key]);
    } else {
      dates[hash] = {};
      dates[hash].date = dateString.replace(/ ..$/g, '').toUpperCase();
      dates[hash].values = [entries[key]];
    }
  });
  return dates;
};

const EntryListContainer = ({ entries }) => {
  if (isEmpty(entries) || isEmpty(entries.entries)) {
    return (
      <Loading />
    );
  }
  return (
    <EntryList entries={getDateSet(entries.entries)} />
  );
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
