import "./App.css";
import Classclick from "./Components/Classclick";
import Counter from "./Components/Counter";
import Functionclick from "./Components/Functionclick";
import Home from "./Pages/home";

import { Nit } from "./Components/Nitish";
import About from "./Pages/About";
import Title from "./Components/title";
import List from "./Components/List";
import Form from "./Components/Form";

// import Person from "./Components/Person";

function App() {
  function AlertHandler(data) {
    alert(data);
  }

  const description = "Data is passed from Parent Component ";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div className="App">
        React Week 1<br></br>
        {/* Counter Clicks */}
        {/* <Counter></Counter> */}
        <br></br>
        {/* <Functionclick></Functionclick> */}
        {/* <Person></Person> */}
        {/* <Classclick></Classclick> */}
        {/* <About></About> */}
        {/* -- Conditional Rendering -- */}
        {/* <Home></Home> */}
        {/* <List></List> */}
        <Title alert={AlertHandler} Description={description}></Title>
        {/* Login Form */}
        {/* <Form></Form> */}
      </div>
    </div>
  );
}

export default App;
