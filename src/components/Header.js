import React from "react"
const Header = ({ title }) => {
  return (
    <header className='container row'>
      <div className='col'>
        <h1>{title}</h1>
      </div>
      <div className='col text-end'>
        <button className='btn btn-dark text-center'>Add</button>
      </div>
    </header>
  )
}

Header.defaultProps = { 
    title: 'Task Tracker',
}


export default Header
