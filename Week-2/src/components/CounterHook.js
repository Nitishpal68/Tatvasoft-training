import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

function CounterHook({ data, count }) {
  //   const [count, setCount] = useState(0);
  //   const [data, setData] = useState(0);

  useEffect(() => {
    console.log("useEffect Incrementer");
  }, [data]);

  return (
    <div>
      <h4>
        counterHook Example
        {/* <p>Count : {count}</p> */}
        <p>Data : {data}</p>
        <p>Count : {count}</p>
        {/* <Button
          variant="contained"
          color="error"
          onClick={() => setCount(count + 1)}
        >
          Update Count
        </Button> */}
        {/* <Button variant="contained" color="error">
          Update Data
        </Button>  */}
      </h4>
    </div>
  );
}

export default CounterHook;
