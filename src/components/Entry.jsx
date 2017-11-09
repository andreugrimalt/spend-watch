import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #9E9E9E;
  margin-left: 16px;

  div:first-of-type {
    flex-grow: 1;
  }
`;

const Place = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin-left: 16px;
  }
`;

const Amount = styled.div`
  padding-right: 16px;
  ::before {
    content: '£';
  }
`;

const Icon = styled.span`
  font-size: 22pt;
`;
/* eslint-disable jsx-a11y/accessible-emoji */
const Entry = props => (
  <Li>
    <Place>
      <Icon role="img" aria-label="carrot">🥕</Icon>
      <div>{props.place}</div>
    </Place>
    <Amount>{props.amount}</Amount>
  </Li>
);

Entry.propTypes = {
  amount: PropTypes.number,
  place: PropTypes.string,
};

Entry.defaultProps = {
  amount: 0,
  place: '',
};

export default Entry;
