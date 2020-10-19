import React, { useState } from 'react';
import CreateTask from './CreateTask';
import TaskItem from './TaskItem';

function App() {
  const todos = [
    {content: "Build a todo list app", due:"Today", isComplete: false, important: true},
    {content: "Build a todo list app", due:"Today", isComplete: false, important: true},
    {content: "Build a todo list app", due:"Today", isComplete: false, important: true},
    {content: "Build a todo list app", due:"Today", isComplete: false, important: true},
    {content: "Build a todo list app", due:"Today", isComplete: false, important: false},
  ];

  const [tasks, setTasks] = useState(todos);
  const [showAdd, setShowAdd] = useState(false);

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks])
  }

  const toggleShow = () => {
    setShowAdd(!showAdd);
  }

  const completeTask = (i) => {
    const newTasks = [...tasks];
    newTasks[i].isComplete = !newTasks[i].isComplete;
    setTasks(newTasks);
  }

  const starTask = (i) => {
    const newTasks = [...tasks];
    newTasks[i].important = !newTasks[i].important;
    setTasks(newTasks);
  }

  const deleteTask = (i) => {
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <div className="head">
        <h1>TODO</h1>
        <h3>Let's get some stuff done today!</h3>
      </div>

      <div className="create-container">
        <button onClick={toggleShow} className="add btn">+ Add task</button>
        <CreateTask add={addTask} show={showAdd}/>
      </div>

      <div className="tasks-container">
        {tasks.map((task, i) => (
          <TaskItem 
            key={`task-${i}`} 
            index={i} task={task} 
            complete={completeTask}
            star={starTask}
            delete={deleteTask}/>
        ))}
      </div>
    </div>
  );
}

export default App;
