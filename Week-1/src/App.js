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
import Registration from "./Pages/Registration";

// import Person from "./Components/Person";

function App() {
  return (
    <div className="App">
      <header>
        React Week 1<br></br>
        {/* <Counter />
        <br></br>
        <Functionclick></Functionclick>
        {/* <Person></Person> */}
        {/* <Classclick></Classclick> */}
        <br></br>
        {/* <About></About> */}
        {/* <Home></Home> */}
        <List></List>
        <Title></Title>
        Login Form
        <Form></Form>
        <Registration></Registration>
      </header>
    </div>
  );
}

export default App;
