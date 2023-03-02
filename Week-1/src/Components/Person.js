import React, { Component } from "react";
//State and setstate
class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "Nitish Pal",
      age: 27,
    };
  }

  changename = () => {
    this.setState({
      name: "Kaushik",
    });
  };

  changeage = () => {
    this.setState({
      age: 24,
    });
  };

  render() {
    return (
      <>
        <div>
          <h4> Hello Name: {this.state.name}</h4>
          <h5>Age:{this.state.age}</h5>
          <button onClick={this.changename}>Change Name</button>
          <button onClick={this.changeage}>Change Age</button>
        </div>
      </>
    );
  }
}

export default Person;
