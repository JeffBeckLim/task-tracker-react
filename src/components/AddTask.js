import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'



const AddTask = ({ onAdd }) => {
    const [text , setText] = useState('')
    const [day , setDay] = useState('')
    const [reminder  , setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
        alert('Please add a task')
        return
    }

    onAdd({ text,day,reminder })
    setText('')
    setDay('')
    setReminder(false)
}   

  return (
    <div className='row'>
        <form  onSubmit={onSubmit}> 
            <label htmlFor="addTask">Task</label>
            <input className='form-control p-2' type="text" name="addTask" placeholder='Add Task' id="addTask" 
                value={text} onChange={(e) => setText(e.target.value)}
            />
            
            <label htmlFor="addDateTime">Date and Time</label>
            <input className='form-control p-2' type="text" name="addDateTime" placeholder='Add Task' id="addDateTime" 
             value={day} onChange={(e) => setDay(e.target.value)}/>
            
            <div className='form-check'>
                <label className='form-check-label' htmlFor="setReminder">Set Reminder</label>
                <input className='form-check-input p-2' type="checkbox" name="setReminder" id="setReminder" checked={reminder}
                  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <Button className='w-100' variant="contained" style={{backgroundColor: 'black'}}>
                Click me
            </Button>
            <input className='btn btn-dark mt-3 w-100 ' type="submit" value='Save Task'/>
            
        </form>
    </div>

  )
}


export default AddTask
