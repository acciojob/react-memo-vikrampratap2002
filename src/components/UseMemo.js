import React, { useMemo, useEffect } from "react";

function UseMemo({ count }) {
  const expensiveCalculation = useMemo(() => {
    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += i;
    }

    return result;
  }, [count]);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{expensiveCalculation}</p>
    </div>
  );
}

export default UseMemo;