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
    };

    // TODO: Use decorator here
    this.signIn = this.signIn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Login
        updateInputValue={this.handleInputChange}
        signIn={this.signIn}
        showSignInButton={this.state.showSignInButton}
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
