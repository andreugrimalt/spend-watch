/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isEmpty } from 'react-redux-firebase';
import crypto from 'crypto';
import { setUser } from '../actions';
import { withRouter } from 'react-router';

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
    console.log(this.props);
    this.props.firebase.auth().onAuthStateChanged(user => {
      // if (user) {
      //   this.props.dispatch(setUser(user));
      // } else {
      //   this.props.history.push('/login');
      // }
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    // if (isEmpty(this.props.entries) || isEmpty(this.props.entries.entries)) {
    //   return (
    //     <Loading />
    //   );
    // }
    return (
      <EntryList auth={this.props.auth} />
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

// export default connect(
//   ({ firebase }) => ({
//     auth: firebase.auth,
//   })
// )(EntryListContainer)

export default compose(
  firebaseConnect(),
  connect(
    ({ firebase }) => ({
      auth: firebase.auth,
    })
  )
)(EntryListContainer);

// export default compose(
//   firebaseConnect((props, store) => ([
//     `todos/${store.getState().firebase.auth.uid}`
//   ]),
//   connect(({ firebase: { data, auth } }) => ({
//     todosList: data.todos && data.todos[auth.uid],
//   }))
// )(SomeComponent)

// const fbWrapped = firebaseConnect((props, store) => ([
//   `${store.getState().firebase.auth.uid}/entries`
// ]))(EntryListContainer)

// // pass todos list for the specified type of todos from redux as `this.props.todosList`
// export default connect(({ firebase: { data, auth } }) => {
//   console.log(data, auth);
//   return ({
//     entries: data[auth.uid] ? data[auth.uid] : [],
//   })
// })(fbWrapped)

// export default compose(
//   withRouter,
//   connect(state => {
//     const uid = state.login.user ? state.login.user.uid : '';
//     // console.log(state);
//     return {
//       entries: state.firebase.data[uid],
//       login: state.login,
//     };
//   }),
//   firebaseConnect((props, store) => {
//     const state = store.getState();
//     console.log(state);
//     const uid = state.login.user ? state.login.user.uid : '';
//     return [`${uid}/entries`];
//   }),
// )(EntryListContainer);