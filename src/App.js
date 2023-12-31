import React from 'react';
import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import NoTask from "./components/NoTask";
import AddTask from './components/AddTask';

function App() {

  const [showAddTask , setShowAddTask] = useState(false); 

  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctors appointment',
        day: ' Feb 5th at 2:30pm',
        reminder:  true,
    },
    {
        id: 2,
        text: "Meeting with client",
        day: "Feb 10th at 11:00am",
        reminder: true
    },
    {
        id: 3,
        text: "Gym session",
        day: "Feb 15th at 5:00pm",
        reminder: false
    },
])
//  Add Task
const addTask = (task) => {
  console.log(tasks.length)

  const id = tasks.length + 1  
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  console.log(id);
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    )
  )
}

  
  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)}  showAdd = {showAddTask}/>
      
      {showAddTask ? 
        (<AddTask onAdd = {addTask} />) : ('')
      }

      {tasks.length > 0 ? (
        <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : (
          <NoTask /> 
      )}
    
    </div>
  );
}

export default App;
