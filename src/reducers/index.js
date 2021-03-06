/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import entries from './entries';
import login from './login';

const firebaseConfig = {
  apiKey: 'AIzaSyBpb8tGo9YOAfVFY8h-QWG5QUHy0DYs-SI',
  authDomain: 'spend-watch.firebaseapp.com',
  databaseURL: 'https://spend-watch.firebaseio.com',
  projectId: 'spend-watch',
  storageBucket: 'spend-watch.appspot.com',
  messagingSenderId: '832207920078',
};

firebase.initializeApp(firebaseConfig);

const reduxFirebaseConfig = {
  userProfile: 'users',
  // enableLogging: true,
};

// Add reactReduxFirebase store enhancer
/* eslint-disable */
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, reduxFirebaseConfig), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore);
/* eslint-enable */

// Add firebase to reducers
// TODO: 'entries' doesnt make sense here
const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  entries,
  login,
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

export default store;
