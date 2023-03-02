import React from "react";

function Functionclick() {
  const clickHandler = () => {
    console.log("Button Click");
  };

  return <button onClick={clickHandler}>Click</button>;
}

export default Functionclick;
