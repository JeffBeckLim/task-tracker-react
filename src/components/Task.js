import React from "react"
import { FaTimes } from 'react-icons/fa'

const Task = ({ task , onDelete, onToggle }) => {
  return (
    <div className={`border bg-light p-3 rounded my-2 border-start ${task.reminder? 'border-dark' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <div className='row g-0'>
            {task.reminder? <h6 className="text-secondar fw-light">Reminder on</h6> : ''}
            <div className='col-11'>
                <h5>{task.text}</h5>
            </div>
            <div className='col text-end'>
                 <FaTimes className='text-danger' onClick={() => onDelete(task.id)} style={{ cursor: 'pointer'}}/>
            </div>
             
        </div>
        <p className='m-0'>{task.day}</p>
    </div>
  )
}

export default Task
