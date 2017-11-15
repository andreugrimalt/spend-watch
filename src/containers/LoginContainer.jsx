import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { setUser } from '../actions';

import Login from '../components/Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showSignInButton: true,
      signAction: 'SIGN_IN',
    };

    // TODO: Use decorator here
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.doSignAction = this.doSignAction.bind(this);
    this.toggleSignAction = this.toggleSignAction.bind(this);
  }

  toggleSignAction() {
    this.setState({
      signAction: this.state.signAction === 'SIGN_IN' ? 'SIGN_UP' : 'SIGN_IN',
    });
  }

  async signIn() {
    try {
      this.setState({
        showSignInButton: false,
      });
      const login = await this.props
        .firebase.auth()
        .signInWithEmailAndPassword(
          this.state.email,
          this.state.password,
        );
      this.props.dispatch(setUser(login));
      this.props.history.push('/list');
    } catch (error) {
      this.setState({
        showSignInButton: true,
      });
    }
  }

  async signUp() {
    try {
      this.setState({
        showSignInButton: false,
      });
      const signUp = await this.props
        .firebase.auth()
        .createUserWithEmailAndPassword(
          this.state.email,
          this.state.password,
        );
      this.props.dispatch(setUser(signUp));
      this.props.history.push('/list');
    } catch (error) {
      this.setState({
        showSignInButton: true,
      });
    }
  }

  doSignAction() {
    switch (this.state.signAction) {
      case 'SIGN_IN':
        this.signIn();
        break;
      case 'SIGN_UP':
        this.signUp();
        break;
      default:
    }
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Login
        updateInputValue={this.handleInputChange}
        signIn={this.doSignAction}
        showSignInButton={this.state.showSignInButton}
        toggleSignAction={this.toggleSignAction}
        signAction={this.state.signAction}
      />
    );
  }
}
/* eslint-disable */
LoginContainer.propTypes = {
  firebase: PropTypes.any,
  dispatch: PropTypes.any,
  history: PropTypes.any,
}

export default withRouter(compose(
  firebaseConnect(),
  connect(),
)(LoginContainer));
