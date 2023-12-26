import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { Checkbox } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const label = 'Reminder'

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
            <TextField className='w-100' label="Task" variant="outlined"  value={text} onChange={(e) => setText(e.target.value)} />
            <TextField className='w-100 mt-3' label="Date and Time" variant="outlined"  value={day} onChange={(e) => setDay(e.target.value)} />
            
            <FormControlLabel
                control={<Checkbox />}
                label="Set Reminder"
                labelPlacement="top"
                checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
            />
            <Button className='w-100' variant="contained" style={{backgroundColor: 'black', textTransform: 'none'}}  type="submit" value='Save Task'>
                Save Task
            </Button>
            
        </form>
    </div>

  )
}


export default AddTask
