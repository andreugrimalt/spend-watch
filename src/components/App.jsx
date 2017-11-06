/* eslint-disable react/forbid-prop-types,
react/require-default-props,
react/no-unused-prop-types
*/
import React from 'react';
import PropTypes from 'prop-types'; // can also come from react if react <= 15.4.0
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

const App = ({ entries }) => {
  console.log(entries);
  return (
    <div>
      <h1>{entries}</h1>
    </div>
  );
};

App.propTypes = {
  entries: PropTypes.object,
  firebase: PropTypes.object, // comes from firebaseConnect
};

export default compose(firebaseConnect(['entries']), connect(state => ({ entries: state.firebase.data.entries })))(App);
