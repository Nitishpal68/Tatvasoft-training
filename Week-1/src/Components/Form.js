import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
      passValue: "",
      topic: "",
    };
  }

  onChangeHandeler = (event) => {
    this.setState({
      textValue: event.target.value,
    });
  };

  onPassChange = (event) => {
    this.setState({
      passValue: event.target.value,
    });
  };

  selectHandeler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitHandler = (event) => {
    alert(
      `${this.state.textValue} ${this.state.passValue} ${this.state.topic} `
    );
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="app">
        <div>
          <label>Name</label>
          <br></br>
          <input
            type={Text}
            value={this.textValue}
            onChange={this.onChangeHandeler}
          />
        </div>
        <div>
          <label>Password</label>
          <br></br>
          <input
            type={"password"}
            value={this.state.passValue}
            onChange={this.onPassChange}
          />
        </div>
        <div>
          select a topic <br></br>
          <select value={this.state.topic} onChange={this.selectHandeler}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
