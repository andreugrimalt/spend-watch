import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import EntriesContainer from '../containers/EntriesContainer';
// import EntryInputContainer from '../containers/EntryInputContainer';

import LoginContainer from '../containers/LoginContainer';


const Div = styled.div`
display: flex;
flex-direction: column;
font-family: Helvetica Neue;
box-sizing: border-box;
color: #212121;
height: 100%;

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

const Root = ({ store }) => (
  <Provider store={store}>
    <Div>
      <Route path="/login" component={LoginContainer} />
      <Route path="/list" component={EntriesContainer} />
    </Div>
  </Provider>
);
/* eslint-disable */
Root.propTypes = {
  store: PropTypes.any,
}
export default Root;