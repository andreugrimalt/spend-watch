import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import crypto from 'crypto';


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
  flex-grow: inherit;
  overflow-y: auto;
`;


const getDateSet = entries => {
  const dates = {};
  Object.keys(entries).forEach(key => {
    const dateString = new Date(entries[key].time).toLocaleString('en-gb', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    });

    const hash = crypto.createHash('md5').update(dateString).digest('hex');

    if (dates[hash] && Array.isArray(dates[hash].values)) {
      dates[hash].values.push(entries[key]);
    } else {
      dates[hash] = {};
      dates[hash].date = dateString.replace(/ ..$/g, '').toUpperCase();
      dates[hash].values = [entries[key]];
    }
  });
  return dates;
};


// TODO: Avoid nested looping
const EntryList = props => {
  const entries = getDateSet(props.entries);
  return (
    <List>
      {Object.keys(entries).map(key => (
        <div key={key}>
          <Subtitle>
            <h2>{entries[key].date}</h2>
          </Subtitle>
          {entries[key].values.map(value => (
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
};

/* eslint-disable */
EntryList.propTypes = {
  entries: PropTypes.object,
};

const Loading = () =>
  <div>Loading...</div>

const fbWrappedComponent = firebaseConnect(({ auth }) => ([ `${auth ? auth.uid : null}/entries`]))(EntryList)

export default connect(
  ({ firebase }) => {
    if (firebase.auth && firebase.auth.uid && firebase.data && firebase.data[firebase.auth.uid]) {
      return { entries: firebase.data[firebase.auth.uid].entries };
    }
    return ({
      entries: {},
    });
  }
)(fbWrappedComponent)

export { Loading };