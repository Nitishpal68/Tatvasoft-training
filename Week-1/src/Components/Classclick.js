import React, { Component } from "react";
//
class Classclick extends Component {
  clickhandeler() {
    console.log("Button Clicked");
  }

  render() {
    return <button onClick={this.clickhandeler}>click me</button>;
  }
}

export default Classclick;
