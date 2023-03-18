import logo from "./logo.svg";
import "./App.css";
import Registration from "./components/Registration";
import LoginForm from "./components/LoginForm";
import CounterHook from "./components/CounterHook";
import LoginHook from "./components/LoginHook";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <Registration></Registration>
      <br></br>
      <br></br>
      <br></br>
      <LoginForm></LoginForm> */}
      <CounterHook data={data} count={count}></CounterHook>
      <Button
        variant="contained"
        color="error"
        onClick={() => setData(data + 1)}
      >
        Update Data
      </Button>
      <br></br>
      <Button
        variant="contained"
        color="warning"
        onClick={() => setCount(count + 1)}
      >
        Update Count
      </Button>
      <LoginHook></LoginHook>
    </div>
  );
}

export default App;
