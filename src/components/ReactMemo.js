import React from "react";

// Child component wrapped in React.memo
const CounterDisplay = React.memo(({ counter }) => {
  console.log("CounterDisplay rendered");
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <h2>React.memo Demo</h2>
      <p>Counter Value: {counter}</p>
    </div>
  );
});

function ReactMemo({ counter }) {
  return <CounterDisplay counter={counter} />;
}

export default ReactMemo;