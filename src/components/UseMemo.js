import React, { useMemo } from "react";

function UseMemo({ todos }) {
  // Expensive calculation memoized based on todos length
  const todoCount = useMemo(() => {
    console.log("Calculating todo count...");
    return todos.length;
  }, [todos]);

  // Memoize a derived value: longest todo string
  const longestTodo = useMemo(() => {
    console.log("Calculating longest todo...");
    return todos.reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ""
    );
  }, [todos]);

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <h2>useMemo Demo</h2>
      <p>Total Todos: {todoCount}</p>
      <p>Longest Todo: {longestTodo || "N/A"}</p>
    </div>
  );
}

export default UseMemo;