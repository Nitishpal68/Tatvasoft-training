import React, { Component } from "react";
import Title from "../Components/title";
// Render title in home.js and passed props , destructuring  title and description
// Here i have passed props and states to title.js page and rendered title page inside Home.js
class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: "This is a title page",
      description: "This page provide information about title",
      isloggedIn: true,
    };
  }

  clickHandeler = () => {
    this.setState({
      isloggedIn: true,
    });
  };
  // conditional & ternary rendering
  render() {
    return this.state.isloggedIn ? <div>Hello world</div> : <div>Bye</div>;

    // return (
    //   <div>
    //     //{" "}
    //     {/* home
    // //     <br></br>
    // //     <Title
    // //       title={this.state.title}
    // //       description={this.state.description}
    // //       name="Nitish"
    // //     ></Title> */}
    //     // <p>Hello I am inside home Page</p>
    //     <button onClick={this.clickHandeler}> aboutpage </button>;
    //   </div>
    // );
  }
}

export default Home;
