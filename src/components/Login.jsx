import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  background-color: #EEEEEE;
  height: 100%;
`;

const Input = styled.input`
  border-radius: 26px;
  background: white;
  padding: 8px 0 8px 8px;
  height: 26px;
  margin: 20px 0 0 0;
`;

const SignIn = styled.button`
  margin-top: 20px;
  background: #9E9E9E;
  padding: 10px;
  border-radius: 15px;
  color: #FAFAFA;
`;

const Logo = styled.span`
  font-size: 90pt;
`;
/* eslint-disable jsx-a11y/accessible-emoji */
const Login = props =>
  (
    <Div>
      <Logo role="img" aria-label="logo">🥕</Logo>
      <Input onChange={props.updateInputValue} placeholder="Email" name="email" />
      <Input onChange={props.updateInputValue} placeholder="Password" name="password" />
      <SignIn onClick={props.signIn}>{props.showSignInButton ? props.signAction : ''}</SignIn>
      <span>or
        <button onClick={props.toggleSignAction}>{props.signAction}</button>
      </span>
    </Div>
  );
/* eslint-disable */
Login.propTypes = {
  updateInputValue: PropTypes.any,
  signIn: PropTypes.any,
  showSignInButton: PropTypes.any,
  toggleSignAction: PropTypes.any,
  signAction: PropTypes.any,
}

export default Login;
