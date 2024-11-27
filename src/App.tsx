import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
function App() {
  return (
    <div className="App">
      <h2>Simple Task Manager</h2>
      <TaskInput/>
      <TaskList/>
    </div>
  );
}

export default App;
