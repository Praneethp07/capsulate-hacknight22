import React from 'react'
import './headder.css'
import NAV from './../navbar/Nav'

const Headder = () => {
  return (
    <header>
      <div class="headder_container">
        {/* <h1>headder</h1> */}
        <NAV />
      </div>
    </header>
  )
}

export default Headder