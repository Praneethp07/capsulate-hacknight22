import React from 'react';
import './body.css';
// import NAV from './../navbar/Nav'
import ControlledCarousel from './Carousel'

const Body = () => {
  return (
      <div class="body_container">
        <div class="tab_nav">
          <ControlledCarousel/>
        </div>
      </div>
  )
}

export default Body