import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Entry from './Entry';

const Subtitle = styled.div`
  display: flex;
  height: 44px;
  align-items: center;
  > h2 {
    margin-left: 15px;
    font-size: 13pt;
  }
  border-bottom: 1px solid #9E9E9E;
  background: #EEEEEE;
`;

const List = styled.ul`
  height: 631px;
  overflow-y: auto;
`;

// TODO: Avoid nested looping
const EntryList = props => (
  <List>
    {Object.keys(props.entries).map(key => (
      <div key={key}>
        <Subtitle>
          <h2>{props.entries[key].date}</h2>
        </Subtitle>
        {props.entries[key].values.map(value => (
          <Entry
            key={`${key}_${value.amount}_${value.time}_${value.place}`}
            amount={parseFloat(value.amount, 10)}
            place={value.place}
          />
        ))}
      </div>
    ))}
  </List>
);

/* eslint-disable */
EntryList.propTypes = {
  entries: PropTypes.object,
};

const Loading = () =>
  <div>Loading...</div>

export default EntryList;

export { Loading };