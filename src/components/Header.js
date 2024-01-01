import React from "react"
import { Button } from '@mui/material'

const Header = ({ title, onAdd , showAdd }) => {
  return (
    <header className='container row'>
      <div className='col'>
        <h1>{title}</h1>
      </div>
      <div className='col text-end'>
      
        <Button onClick={onAdd} variant={showAdd ? ('outlined') : ('contained')} style={{backgroundColor: showAdd ? '' : 'black', textTransform: 'none' ,color: showAdd ? 'black' : '', borderColor: showAdd ? 'black' : ''}}>
                {showAdd ? ('Close') : ('Add')}
        </Button>
   
      </div>
    </header>
  )
}

Header.defaultProps = { 
    title: 'Task Tracker',
}


export default Header
