/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isEmpty } from 'react-redux-firebase';
import crypto from 'crypto';
import { setUser } from '../actions';

import EntryList, { Loading } from '../components/EntryList';

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

class EntryListContainer extends Component {
  componentWillMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.dispatch(setUser(user));
      }
    });
    // this.props.dispatch(setUser({ uid: 1234 }));
  }

  render() {
    if (isEmpty(this.props.entries) || isEmpty(this.props.entries.entries)) {
      return (
        <Loading />
      );
    }
    return (
      <EntryList entries={getDateSet(this.props.entries.entries)} />
    );
  }
}
/* eslint-disable */
EntryListContainer.propTypes = {
  entries: PropTypes.object,
  login: PropTypes.any,
  firebase: PropTypes.object,
  dispatch: PropTypes.any,
};

export default compose(
  connect(state => {
    const uid = state.login.user ? state.login.user.uid : '';
    // console.log(state);
    return {
      entries: state.firebase.data[uid],
      login: state.login,
    };
  }),
  firebaseConnect((props, store) => {
    const state = store.getState();
    const uid = state.login.user ? state.login.user.uid : '';
    return [`${uid}/entries`];
  }),
)(EntryListContainer);

// const connectedComponent = connect((state) => {
//   const uid = state.login.user ? state.login.user.uid : '';
//   return {
//     entries: state.firebase.data[uid],
//     login: state.login,
//   };
// })(EntryListContainer);