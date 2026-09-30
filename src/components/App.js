import React, { useState, useEffect } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  // useEffect to log updates (demonstrates lifecycle usage)
  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  useEffect(() => {
    console.log("Counter updated:", counter);
  }, [counter]);

  // Add a default todo
  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  // Increment counter
  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  // Handle custom task input
  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  // Submit custom task (must be > 5 characters)
  const submitCustomTask = () => {
    if (customTask.trim().length > 5) {
      setTodos((prev) => [...prev, customTask.trim()]);
      setCustomTask("");
    }
  };

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Task Management App with React Memo</h1>

      {/* Add Todo Button */}
      <button onClick={addTodo}>Add Todo</button>

      {/* Increment Button */}
      <button onClick={incrementCounter} style={{ marginLeft: "10px" }}>
        Increment
      </button>

      <p>Counter: {counter}</p>

      {/* Custom Task Input */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter custom task (min 6 chars)"
          value={customTask}
          onChange={handleCustomTaskChange}
        />
        <button onClick={submitCustomTask} style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </div>

      {/* Todo List */}
      <ul style={{ marginTop: "20px" }}>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      {/* useMemo Demo */}
      <UseMemo todos={todos} />

      {/* React.memo Demo */}
      <ReactMemo counter={counter} />
    </div>
  );
}

export default App;