/* eslint-disable react/forbid-prop-types,
react/require-default-props,
react/no-unused-prop-types
*/
import React from 'react';
import PropTypes from 'prop-types'; // can also come from react if react <= 15.4.0
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import EntryListContainer from '../containers/EntryListContainer';
import EntryInputContainer from '../containers/EntryInputContainer';

const uid = 'iwOrGZIswOfRWJQafOKS0w6heWi1';


const App = () => {
  console.log('hey');
  return (
    <div>
      <EntryListContainer />
      <EntryInputContainer />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object,
  firebase: PropTypes.object, // comes from firebaseConnect
  state: PropTypes.any,
  dispatch: PropTypes.any,
};
/* eslint-disable */
export default compose(firebaseConnect([`${uid}/entries`]), connect(state => {
  return ({ data: state.firebase.data[uid] });
}))(App);
