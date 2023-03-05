import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incremeter() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Counter Called", this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incremeter()}> Incrementer </button>
        <br></br>
        click - {this.state.count}
      </div>
    );
  }
}

export default Counter;
