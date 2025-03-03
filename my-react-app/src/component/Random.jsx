import React from "react";

function Random() {
  let number = Math.random();
  return (
    <div>
      <h1>Random Number is: {Math.round(number)}</h1>
    </div>
  );
}

export default Random;
