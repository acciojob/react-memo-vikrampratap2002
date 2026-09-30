import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  return (
    <div>
      <h1>React.useMemo</h1>

      <h2>My todos</h2>

      <p>New Todo</p>

      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}

      <hr />

      <p>
        Count: {count}{" "}
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>

      <UseMemo count={count} />

      <hr />

      <ReactMemo />
    </div>
  );
}

export default App;