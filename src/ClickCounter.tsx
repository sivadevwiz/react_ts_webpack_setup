import { render } from "react-dom";
import React, { Component } from "react";

class ClickCounter extends Component {
  state = {
    count: 0,
  };

  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <h1> works</h1>
        <button onClick={this.handleCount}> Count {count}</button>
      </>
    );
  }
}

export default ClickCounter;
