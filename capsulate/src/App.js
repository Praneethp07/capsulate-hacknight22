import React from 'react';
import './App.css';
import Headder from './components/headder/Headder';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';


const App = () => {
  return (
    <div className='App'>
  
      <Headder />
      <Body />
      <Footer />
    </div>
  )
}

export default App


