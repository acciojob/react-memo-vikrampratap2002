import React, { useState } from "react";

function ReactMemo() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ]);

  const addSkill = () => {
    if (skill.length >= 5) {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  return (
    <div>
      <h2>React.memo</h2>

      <input
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button onClick={addSkill}>Add Skill</button>

      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ReactMemo);