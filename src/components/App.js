import React, { useState, useEffect, useMemo, memo } from 'react';


// --- React.memo Component for Skill Input ---
// This component only re-renders when its props change.
const SkillInput = memo(({ onAddSkill }) => {
  const [skill, setSkill] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill.trim().length > 5) {
      onAddSkill(skill.trim());
      setSkill('');
      setError('');
    } else {
      setError('Skill must be more than 5 characters.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={skill}
          onChange={(e) => {
            setSkill(e.target.value);
            if (error) setError('');
          }}
          placeholder="Enter a skill"
        />
        <button type="submit">Add Skill</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
});

// --- Expensive Calculation Component (using useMemo) ---
const ExpensiveCalculation = ({ count }) => {
  // This simulates an expensive calculation that only runs when `count` changes.
  const expensiveValue = useMemo(() => {
    console.log('Running expensive calculation...');
    // Simulate a heavy computation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{expensiveValue}</p>
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [todos, setTodos] = useState(['New Todo']);
  const [count, setCount] = useState(0);
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  // useEffect to update the document title based on the counter
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* React.useMemo Section */}
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>

      <div style={{ margin: '20px 0' }}>
        <span>Count: {count} </span>
        <button onClick={increment}>+</button>
      </div>

      <ExpensiveCalculation count={count} />

      <hr />

      {/* React.memo Section */}
      <h1>React.memo</h1>
      <SkillInput onAddSkill={addSkill} />
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;