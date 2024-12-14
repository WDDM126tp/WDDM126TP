// src/TaskList.js
import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  const addTask = () => {
    setTasks([...tasks, `Task ${tasks.length + 1}`]);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskList;
