import React from 'react';
import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import NoTask from "./components/NoTask";

function App() {
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

// Delete Task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  console.log(id);
    setTasks(
      tasks.map((task) => 
      task.id == id ? {...task, reminder: !task.reminder} : task
    )
  )
}

  
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : (
          <NoTask />
        )}
    </div>
  );
}

export default App;
