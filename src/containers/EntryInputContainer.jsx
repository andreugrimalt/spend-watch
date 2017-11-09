/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { addEntry } from '../actions';
import EntryInput from '../components/EntryInput';

const uid = 'iwOrGZIswOfRWJQafOKS0w6heWi1';

class EntryInputContainer extends Component {
  constructor(props) {
    super(props);
    // State for this component only
    this.state = {
      inputValue: '',
    };
  }
  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  add(e) {
    const amount = parseFloat(this.state.inputValue, 10);
    this.props.dispatch(addEntry(this.props.firebase, `${uid}/entries`, { amount, time: Date.now(), place: 'Sainsburys' }));
    this.setState({
      inputValue: '',
    });
  }

  render() {
    return (
      <EntryInput add={this.add.bind(this)} updateInputValue={this.updateInputValue.bind(this)} value={this.state.inputValue}/>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
EntryInputContainer.propTypes = {
  // firebase: PropTypes.object,
  // dispatch: PropTypes.any,
};

EntryInputContainer.defaultProps = {
  // firebase: PropTypes.object,
  // dispatch: PropTypes.any,
};

export default compose(firebaseConnect(), connect())(EntryInputContainer);
