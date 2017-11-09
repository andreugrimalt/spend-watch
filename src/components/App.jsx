/* eslint-disable react/forbid-prop-types,
react/require-default-props,
react/no-unused-prop-types
*/
import React from 'react';
import PropTypes from 'prop-types'; // can also come from react if react <= 15.4.0
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import styled from 'styled-components';

import EntryListContainer from '../containers/EntryListContainer';
import EntryInputContainer from '../containers/EntryInputContainer';

const uid = 'iwOrGZIswOfRWJQafOKS0w6heWi1';


const Div = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica Neue;
  box-sizing: border-box;
  color: #212121;

  // TODO: Remove before pushing, only for dev
  // ::after {
  //   content: "";
  //   background: url(/design.jpeg);
  //   background-size: contain;
  //   opacity: 0.5;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   position: absolute;
  //   z-index: -1;
  // }
`;

const App = () => (
  <Div>
    <EntryListContainer />
    <EntryInputContainer />
  </Div>
);

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
