import React, { Component } from 'react';
import Total from '../components/Total';

class TotalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: {
        spent: 0,
        owed: 0,
      },
    };
  }

  componentWillMount() {
    this.calculateTotal();
  }
  // TODO: Implement method
  calculateTotal() {
    this.setState({
      total: {
        spent: 1,
        owed: 2,
      },
    });
  }

  render() {
    return (
      <Total total={this.state.total} />
    );
  }
}
export default TotalContainer;

